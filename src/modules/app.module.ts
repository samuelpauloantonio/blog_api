import { PostModule } from './post/post.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './accounts/services/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import dbMongoConfig from '../shared/infra/mongo';

@Module({
    imports: [
        PostModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(dbMongoConfig.url, dbMongoConfig.properties),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
