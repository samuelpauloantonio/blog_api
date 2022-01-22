import 'dotenv/config';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import configuration from 'src/config/configuration';
import { AppModule } from 'src/modules/app.module';

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
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, configSwagger);

    SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    app.useGlobalPipes(new ValidationPipe());
    const port = configuration.port;
    await app.listen(port);

    console.log(`server running in port ${port}`);
}

bootstrap();
