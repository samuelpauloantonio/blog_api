import { ICreateUserDTO } from '../dto/createUserDTO';
import { UserDocument } from '../infra/mongo/mongoose/schemas/user.schema';

export interface IUserRepository {
    createUser({
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<UserDocument>;
}
