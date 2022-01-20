/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateUserDTO } from 'src/modules/accounts/dto/createUserDTO';
import { UserResponseDTO } from 'src/modules/accounts/dto/UserResponseDTO';

import { ICreateUserServices } from 'src/modules/accounts/services/interfaces/ICreateUserServices.interface';

@Controller('user')
export class UserController {
    constructor(
        @Inject('CreateUserService')
        private CreateUserService: ICreateUserServices,
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
}
