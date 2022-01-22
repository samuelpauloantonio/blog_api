import { NotFoundException, Inject, Injectable } from '@nestjs/common';
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

    async findByTitle(title: string): Promise<IPostResponseDTO> {
        if (!title) {
            throw new NotFoundException('Title is missing ');
        }
        const post = await this.PostRepository.findOneByTitle(title);

        if (!post) {
            throw new NotFoundException('Post not found ');
        }

        return PostMap.toDTO(post);
    }
    async findById(_id: string): Promise<IPostResponseDTO> {
        const post = await this.PostRepository.findOneById(_id);

        if (!post) {
            throw new NotFoundException('Post not found ');
        }

        return PostMap.toDTO(post);
    }
}
