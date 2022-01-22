import { ICreatePostDTO, IUpdatePostDTO } from '../../dto/ICreatePost.dto';
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

    updatePost({
        category_id,
        description,
        id,
        title,
    }: IUpdatePostDTO): Promise<PostDocument>;

    deletePost(id: string): Promise<void>;
}
