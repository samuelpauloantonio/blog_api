import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/shared/infra/http/controllers/users/user.controller';
import { UserRepository } from '../infra/mongo/mongoose/repositories/UserRepository';
import { UserSchema, users } from '../infra/mongo/mongoose/schemas/user.schema';
import { CreateUserService } from './createUser/createUser.service';
import { ListUsersServices } from './listUser/listUser.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: users.name, schema: UserSchema }]),
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

        {
            useClass: ListUsersServices,
            provide: 'ListUserServices',
        },
    ],

    exports: [
        {
            useClass: UserRepository,
            provide: 'UserRepository',
        },
    ],
})
export class UserModule {}
