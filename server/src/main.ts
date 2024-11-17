import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // グローバルに設定、アプリケーション全体でバリデーション適用
  app.useGlobalPipes(new ValidationPipe)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
