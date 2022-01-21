import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserModule } from './accounts/services/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import dbMongoConfig from '../shared/infra/mongo';
import { ensureAuthenticated } from 'src/shared/infra/http/middlewares/ensureAuthenticated';
import { AuthModule } from './accounts/auth/auth.module';

@Module({
    imports: [
        PostModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(dbMongoConfig.url, dbMongoConfig.properties),
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ensureAuthenticated).forRoutes('users/list-all');
    }
}
