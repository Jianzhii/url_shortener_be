import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    await app.listen(process.env.NODE_PORT);

    console.log(`Application is running on port: ${process.env.NODE_PORT}`);
}
bootstrap();
