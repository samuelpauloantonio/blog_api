import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthorModule } from './accounts/services/author.module';
import { MongooseModule } from '@nestjs/mongoose';
import dbMongoConfig from '../shared/infra/mongo';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(dbMongoConfig.url, dbMongoConfig.properties),
        AuthorModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
