import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const version = process.env.npm_package_version;

  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  const configSwagger = new DocumentBuilder()
    .setTitle('Saúde iD - Blog API')
    .setDescription('Saúde iD - Blog API with Node Js')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  const port = process.env.PORT;
  await app.listen(port);

  console.log(`server running in port ${port}`);
}

bootstrap();
