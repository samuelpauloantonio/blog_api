import { ICreatePostDTO } from '../../dto/ICreatePost.dto';
import { PostDocument } from '../../infra/mongo/mongoose/schemas/post.schema';

export interface IPostRepository {
    createPost({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<PostDocument>;

    listAllPost(): Promise<PostDocument[]>;

    findOneByTitle(title): Promise<PostDocument>;

    findOneById(_id: string): Promise<PostDocument>;
}
