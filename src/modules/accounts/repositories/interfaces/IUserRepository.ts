import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserResponseDTO } from '../../dto/UserResponseDTO';
import { UserDocument } from '../../infra/mongo/mongoose/schemas/user.schema';

export interface IUserRepository {
    createUser({
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<UserDocument>;

    findOneByEmail(email: string): Promise<UserDocument>;

    listAll(): Promise<UserDocument[]>;

    findOneById(_id: string): Promise<UserDocument>;
}
