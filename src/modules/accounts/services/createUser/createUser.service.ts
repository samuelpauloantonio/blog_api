/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserMap } from '../../mapper/UserMap';
import { IUserRepository } from '../../repositories/IUserRepository';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserService {
    constructor(
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,
    ) {}

    async execute({ name, email, password }: ICreateUserDTO) {
        const passwordHashed = await hash(password, 8);
        const user = await this.UserRepository.createUser({
            name,
            email,
            password: passwordHashed,
        });

        return UserMap.toDTO(user);
    }
}
