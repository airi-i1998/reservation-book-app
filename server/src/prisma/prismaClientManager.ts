import { Injectable, Logger, Scope } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class PrismaClientManager {
  private static asyncLocalStorage = new AsyncLocalStorage<
    Map<string, PrismaClient>
  >();

  constructor(private readonly prismaService: PrismaService) {}

  private static getPrismaClient(): PrismaClient | undefined {
    const store = this.asyncLocalStorage.getStore();
    return store?.get('prismaClient');
  }

  async transaction<T>(
    fn: () => Promise<T>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): Promise<T> {
    const store = new Map<string, PrismaClient>();
    // PrismaService自体をPrismaClientとして使用
    const prismaClient = this.prismaService;
    store.set('prismaClient', prismaClient);

    return PrismaClientManager.asyncLocalStorage.run(store, async () => {
      try {
        const result = await prismaClient.$transaction(
          async (transactionClient) => {
            store.set('prismaClient', transactionClient as PrismaClient);
            return await fn();
          },
          options,
        );
        this.clearTransactionClient();
        return result;
      } catch (error) {
        Logger.debug('Transaction failed and will be rolled back:', error);
        throw error;
      } finally {
        await prismaClient.$disconnect();
        this.clearTransactionClient();
      }
    });
  }

  getClient(): PrismaClient {
    const prismaClient = PrismaClientManager.getPrismaClient();
    if (!prismaClient) {
      return this.prismaService;
    }
    return prismaClient;
  }

  private clearTransactionClient() {
    PrismaClientManager.asyncLocalStorage.getStore()?.delete('prismaClient');
  }
}
