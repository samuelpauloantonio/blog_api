import { ICreatePostDTO } from '../../dto/ICreatePost.dto';
import { IPostResponseDTO } from '../../dto/IPostResponse.dto';

export interface ICreatePostService {
    execute({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<IPostResponseDTO>;
}
