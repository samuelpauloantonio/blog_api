import { PostDocument } from '../../infra/mongo/mongoose/schemas/post.schema';

export interface IListPostService {
    listAll(): Promise<PostDocument[]>;
}
