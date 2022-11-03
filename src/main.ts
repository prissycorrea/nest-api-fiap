import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //carregando a aplicação - module lê-se móduou
  app.useGlobalPipes(new ValidationPipe()); //validação de dados
  await app.listen(3000);
}
bootstrap();
