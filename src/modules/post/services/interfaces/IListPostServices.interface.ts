import { IPostResponseDTO } from '../../dto/IPostResponse.dto';

export interface IListPostService {
    listAll(): Promise<IPostResponseDTO[]>;

    findByTitle(title: string): Promise<IPostResponseDTO>;

    findById(_id: string): Promise<IPostResponseDTO>;
}
