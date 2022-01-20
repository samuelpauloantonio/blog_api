/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserMap } from '../../mapper/UserMap';
import { IUserRepository } from '../../repositories/IUserRepository';

@Injectable()
export class CreateUserService {
    constructor(
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,
    ) {}

    async execute({ name, email, password }: ICreateUserDTO) {
        const user = await this.UserRepository.createUser({
            name,
            email,
            password,
        });

        return UserMap.toDTO(user);
    }
}
