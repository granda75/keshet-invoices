import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for all origins (for development)
  app.enableCors({
    origin: 'http://localhost:4200',  // Your Angular app URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Allow cookies and credentials if needed
  });

  await app.listen(3000);
}
bootstrap();
