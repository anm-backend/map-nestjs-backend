import {
  NestFactory,
  // Reflector
} from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import configuration from './config/configuration';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
// import { HttpExceptionFilter } from './utils/http-exception.filter';
// import mongoose from 'mongoose';

// mongoose.set('useFindAndModify', false);

function CreateSwagger(app: NestExpressApplication): void {
  const docs = '/docs';
  const config = new DocumentBuilder()
    // .addBearerAuth()
    // .addSecurity('basic', {
    //   type: 'http',
    //   scheme: 'basic',
    // })
    // .addBasicAuth()
    .setTitle('Map Find School')
    .setDescription('This is an api document for `Map Find School` Project')
    .setVersion('1.0')
    // .addTag('School Map')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docs, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false,
    logger: ['error', 'warn'],
  });
  app.enableCors();
  // app.setGlobalPrefix('api');
  app
    .useGlobalFilters
    // new FallbackExceptionFilter(),
    // new HttpExceptionFilter(),
    ();
  app.useGlobalPipes(
    new ValidationPipe({
      // transform: true,
      // skipMissingProperties: true,
      // whitelist: true,
      // forbidNonWhitelisted: true,
      // disableErrorMessages: configuration().nodeEnv == 'PRODUCTION',
    }),
  );

  // const reflector = new Reflector();
  // app.useGlobalGuards(new JwtAuthGuard());
  app.useStaticAssets(join(__dirname, '..', 'static'));

  CreateSwagger(app);

  await app.listen(configuration().port);
  // console.log(`Server running on http://localhost:${PORT}/`);
  console.log(`Server running on PORT: ${configuration().port}/`);
}
bootstrap();
