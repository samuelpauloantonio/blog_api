/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ISignUserDTO } from 'src/modules/accounts/dto/ISignUserDTO';
import { AuthService } from 'src/modules/accounts/services/auth/auth.service';

import { IResponseSign } from 'src/modules/accounts/services/interfaces/IResponseSign';

@ApiTags('Users')
@Controller('sessions')
export class AuthenticateUser {
    constructor(private readonly authenticateUserService: AuthService) {}

    //Documentation Swagger
    @ApiOperation({
        summary: 'Authentication user',
        description: 'Create a new Sessions for user',
    })
    @ApiResponse({
        status: 200,
        type: IResponseSign,
    })
    //Route
    @Post()
    async login(
        @Body() { email, password }: ISignUserDTO,
    ): Promise<IResponseSign> {
        const token = await this.authenticateUserService.execute({
            email,
            password,
        });

        return token;
    }
}
