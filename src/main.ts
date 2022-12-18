import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import configuration from './config/configuration';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const PORT = configuration().port;
  const docs = '/docs';
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Swagger for Nest API')
    .setVersion('1.0')
    .addTag('School Map')
    .build();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'static'));
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(docs, app, document);
  await app.listen(PORT);
  // console.log(`Server running on http://localhost:${PORT}/`);
  console.log(`Server running on PORT: ${PORT}/`);
}
bootstrap();
