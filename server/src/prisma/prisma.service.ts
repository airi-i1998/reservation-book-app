import {
  Injectable,
  OnModuleInit,
  Logger,
  OnModuleDestroy,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    'query' | 'info' | 'warn' | 'error'
  >
  implements OnModuleInit
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      errorFormat: 'colorless',
    });
  }

  async onModuleInit() {
    this.$on('query', ({ query, params, duration }) => {
      this.logger.log(
        `Query: ${query}`,
        `Params: ${params}`,
        `Duration: ${duration} ms`,
      );
    });

    this.$on('info', ({ message }) => {
      this.logger.log(`message: ${message}`);
    });

    this.$on('warn', ({ message }) => {
      this.logger.warn(`warn: ${message}`);
    });

    this.$on('error', ({ message }) => {
      this.logger.error(`error: ${message}`);
    });
  }
}
