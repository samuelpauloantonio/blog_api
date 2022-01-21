/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ISignUserDTO } from 'src/modules/accounts/dto/ISignUserDTO';
import { AuthService } from 'src/modules/accounts/services/auth/auth.service';

import { IResponseSign } from 'src/modules/accounts/services/interfaces/IResponseSign';

@Controller('sessions')
export class AuthenticateUser {
    constructor(private readonly authenticateUserService: AuthService) {}

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
