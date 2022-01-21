import { ICreatePostDTO } from '../../dto/ICreatePost.dto';
import { PostDocument } from '../../infra/mongo/mongoose/schemas/post.schema';

export interface ICreatePostService {
    execute({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<PostDocument>;
}
