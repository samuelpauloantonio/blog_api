import { instanceToInstance } from 'class-transformer';
import { UserDocument } from 'src/modules/accounts/infra/mongo/mongoose/schemas/user.schema';
import { IPostResponseDTO } from '../dto/IPostResponse.dto';
import { CategoriesDocument } from '../infra/mongo/mongoose/schemas/categories.schema';
import { PostDocument } from '../infra/mongo/mongoose/schemas/post.schema';

export class PostMap {
    static toDTO({
        _id,
        title,
        description,
        category,
        author,
        createdAt,
        updatedAt,
    }: PostDocument): IPostResponseDTO {
        const { _id: id, name, email } = author as UserDocument;
        const categories = category as CategoriesDocument;
        const post: IPostResponseDTO = instanceToInstance({
            _id,
            title,
            category: {
                _id: categories._id,
                name: categories.name,
                description: categories.description,
            },
            author: {
                _id: id,
                name,
                email,
            },
            description,
            createdAt,
            updatedAt,
        });

        return post;
    }
}
