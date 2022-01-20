/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ICreateAuthorDTO } from '../../dto/createAuthorDTO';
import { IAuthorRepository } from '../../repositories/IAuthorRepository';

@Injectable()
export class CreateAuthorService {
    constructor(
        @Inject('AuthorRepository')
        private readonly AuthorRepository: IAuthorRepository,
    ) {}

    async execute({ name, email, password }: ICreateAuthorDTO) {
        const author = await this.AuthorRepository.createAuthor({
            name,
            email,
            password,
        });

        return author;
    }
}
