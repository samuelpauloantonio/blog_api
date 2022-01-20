import { instanceToInstance } from 'class-transformer';
import { UserResponseDTO } from '../dto/UserResponseDTO';
import { UserDocument } from '../infra/mongo/mongoose/schemas/user.schema';

export class UserMap {
    static toDTO({
        _id,
        name,
        email,
        createdAt,
        updatedAt,
    }: UserDocument): UserResponseDTO {
        const user = instanceToInstance({
            _id,
            name,
            email,
            createdAt,
            updatedAt,
        });

        return user;
    }
}
