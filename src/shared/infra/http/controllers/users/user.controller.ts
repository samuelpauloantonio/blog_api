/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ICreateUserDTO } from 'src/modules/accounts/dto/createUserDTO';
import { UserResponseDTO } from 'src/modules/accounts/dto/UserResponseDTO';

import { ICreateUserServices } from 'src/modules/accounts/services/interfaces/ICreateUserServices.interface';
import { IListUserService } from 'src/modules/accounts/services/interfaces/IListUser.service.interface';

@Controller('users')
export class UserController {
    constructor(
        @Inject('CreateUserService')
        private CreateUserService: ICreateUserServices,
        @Inject('ListUserServices')
        private ListUserServices: IListUserService,
    ) {}

    @Post('create')
    async createUser(
        @Body() { name, email, password }: ICreateUserDTO,
    ): Promise<UserResponseDTO> {
        const user = await this.CreateUserService.execute({
            name,
            email,
            password,
        });

        return user;
    }

    @Get('list-all')
    async ListAll() {
        const users = await this.ListUserServices.listAll();

        return users;
    }
}
