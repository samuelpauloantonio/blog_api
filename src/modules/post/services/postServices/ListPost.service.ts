import { Inject, Injectable } from '@nestjs/common';
import { IPostResponseDTO } from '../../dto/IPostResponse.dto';
import { PostMap } from '../../mapper/PostMap';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';
import { IListPostService } from '../interfaces/IListPostServices.interface';

@Injectable()
export class ListPostServices implements IListPostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,
    ) {}

    async listAll(): Promise<IPostResponseDTO[]> {
        const allPost = await this.PostRepository.listAllPost();

        return allPost.map((post) => PostMap.toDTO(post));
    }
}
