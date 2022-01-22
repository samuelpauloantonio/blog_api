import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';

@Injectable()
export class DeletePostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,
    ) {}

    async delete(id: string): Promise<void> {
        const post = await this.PostRepository.findOneById(id);

        if (!post) {
            throw new NotFoundException('Post Not found to delete');
        }

        await this.PostRepository.deletePost(post._id);
    }
}
