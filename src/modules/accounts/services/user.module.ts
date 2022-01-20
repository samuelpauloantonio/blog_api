import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/shared/infra/http/controllers/users/user.controller';
import { UserRepository } from '../infra/mongo/mongoose/repositories/UserRepository';
import { UserSchema, user } from '../infra/mongo/mongoose/schemas/user.schema';
import { CreateUserService } from './createUser/createUser.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [
        {
            useClass: UserRepository,
            provide: 'UserRepository',
        },

        {
            useClass: CreateUserService,
            provide: 'CreateUserService',
        },
    ],
})
export class UserModule {}
