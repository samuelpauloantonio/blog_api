import { IPostResponseDTO } from '../../dto/IPostResponse.dto';

export interface IListPostService {
    listAll(): Promise<IPostResponseDTO[]>;
}
