/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ICreateUserDTO } from 'src/modules/accounts/dto/createUserDTO';
import { UserResponseDTO } from 'src/modules/accounts/dto/UserResponseDTO';

import { ICreateUserServices } from 'src/modules/accounts/services/interfaces/ICreateUserServices.interface';
import { IListUserService } from 'src/modules/accounts/services/interfaces/IListUser.service.interface';

@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(
        @Inject('CreateUserService')
        private CreateUserService: ICreateUserServices,
        @Inject('ListUserServices')
        private ListUserServices: IListUserService,
    ) {}

    //Documentation Swagger
    @ApiOperation({
        summary: 'Create a new User or author',
    })
    @ApiResponse({
        status: 201,
        type: UserResponseDTO,
    })
    //Route
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

    //Documentation Swagger
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'List All users',
    })
    @ApiResponse({
        status: 200,
        isArray: true,
        type: UserResponseDTO,
    })
    //Route
    @Get('list-all')
    async ListAll(): Promise<UserResponseDTO[]> {
        const users = await this.ListUserServices.listAll();

        return users;
    }
}
