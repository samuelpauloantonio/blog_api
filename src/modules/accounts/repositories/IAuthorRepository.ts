import { ICreateAuthorDTO } from '../dto/createAuthorDTO';
import { AuthorDocument } from '../infra/mongo/mongoose/schemas/author.schema';

export interface IAuthorRepository {
    createAuthor({
        name,
        email,
        password,
    }: ICreateAuthorDTO): Promise<AuthorDocument>;
}
