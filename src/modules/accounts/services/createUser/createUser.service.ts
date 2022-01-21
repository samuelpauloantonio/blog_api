/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserMap } from '../../mapper/UserMap';
import { hash } from 'bcrypt';
import { IUserRepository } from '../../repositories/interfaces/IUserRepository';

@Injectable()
export class CreateUserService {
    constructor(
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,
    ) {}

    async execute({ name, email, password }: ICreateUserDTO) {
        if (await this.UserRepository.findOneByEmail(email)) {
            throw new ConflictException('User already exists');
        }
        const passwordHashed = await hash(password, 8);
        const user = await this.UserRepository.createUser({
            name,
            email,
            password: passwordHashed,
        });

        return UserMap.toDTO(user);
    }
}
