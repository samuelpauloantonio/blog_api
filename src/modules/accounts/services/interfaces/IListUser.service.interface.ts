import { UserResponseDTO } from '../../dto/UserResponseDTO';
import { UserDocument } from '../../infra/mongo/mongoose/schemas/user.schema';

export interface IListUserService {
    listAll(): Promise<UserResponseDTO[]>;

    findOneById(_id: string): Promise<UserResponseDTO>;

    findOneByEmail(email: string): Promise<UserDocument>;
}
