import { Inject, Injectable } from '@nestjs/common';
import { PostDocument } from '../../infra/mongo/mongoose/schemas/post.schema';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';
import { IListPostService } from '../interfaces/IListPostServices.interface';

@Injectable()
export class ListPostServices implements IListPostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,
    ) {}

    async listAll(): Promise<PostDocument[]> {
        return await this.PostRepository.listAllPost();
    }
}
