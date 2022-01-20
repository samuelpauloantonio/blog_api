import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserDocument } from '../../infra/mongo/mongoose/schemas/user.schema';

export interface ICreateUserServices {
    execute({ name, email, password }: ICreateUserDTO): Promise<UserDocument>;
}
