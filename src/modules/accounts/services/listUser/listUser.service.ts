import { Inject, Injectable } from '@nestjs/common';
import { UserResponseDTO } from '../../dto/UserResponseDTO';
import { UserDocument } from '../../infra/mongo/mongoose/schemas/user.schema';
import { UserMap } from '../../mapper/UserMap';
import { IUserRepository } from '../../repositories/interfaces/IUserRepository';
import { IListUserService } from '../interfaces/IListUser.service.interface';

@Injectable()
export class ListUsersServices implements IListUserService {
    constructor(
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,
    ) {}

    async listAll(): Promise<UserResponseDTO[]> {
        const allUser = await this.UserRepository.listAll();
        return allUser.map((user) => UserMap.toDTO(user));
    }

    async findOneById(_id: string): Promise<UserResponseDTO> {
        const user = await this.UserRepository.findOneById(_id);

        return UserMap.toDTO(user);
    }

    async findOneByEmail(email: string): Promise<UserDocument> {
        return await this.UserRepository.findOneByEmail(email);
    }
}
