/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateAuthorDTO } from 'src/modules/accounts/dto/createAuthorDTO';
import { ICreateAuthorServices } from 'src/modules/accounts/services/interfaces/ICreateAuthor.interface';

@Controller('author')
export class AuthorController {
    constructor(
        @Inject('CreateAuthorService')
        private CreateAuthorService: ICreateAuthorServices,
    ) {}

    @Post('create')
    async createAuthor(@Body() { name, email, password }: ICreateAuthorDTO) {
        const author = await this.CreateAuthorService.execute({
            name,
            email,
            password,
        });

        return author;
    }
}
