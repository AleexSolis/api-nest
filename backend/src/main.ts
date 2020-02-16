import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Esto se debe eliminar en Productivo
  app.enableCors();
  // Esto se debe eliminar en Productivo

  await app.listen(3001);
}
bootstrap();
