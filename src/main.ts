import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 //The ValidationPipe makes use of the powerful class-validator package 
  //app.useGlobalPipes(new ValidationPipe());
  //
  await app.listen(3000);
}
bootstrap();
