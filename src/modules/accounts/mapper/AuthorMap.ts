import { instanceToInstance } from 'class-transformer';
import { AuthorResponseDTO } from '../dto/authorResponseDTO';
import { AuthorDocument } from '../infra/mongo/mongoose/schemas/author.schema';

export class AuthorMap {
    static toDTO({
        _id,
        name,
        email,
        createdAt,
        updatedAt,
    }: AuthorDocument): AuthorResponseDTO {
        const author = instanceToInstance({
            _id,
            name,
            email,
            createdAt,
            updatedAt,
        });

        return author;
    }
}
