import { IUpdatePostDTO } from '../../dto/ICreatePost.dto';
import { IPostResponseDTO } from '../../dto/IPostResponse.dto';

export interface IUpdateOrDeletePostService {
    update({
        title,
        id,
        category_id,
    }: IUpdatePostDTO): Promise<IPostResponseDTO>;
    delete(id: string): Promise<void>;
}
