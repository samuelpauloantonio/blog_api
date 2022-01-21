/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { ICreatePostDTO } from '../../dto/ICreatePost.dto';
import { PostDocument } from '../../infra/mongo/mongoose/schemas/post.schema';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';

@Injectable()
export class CreatePostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,
    ) {}

    async execute({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<PostDocument> {
        const posts = await this.PostRepository.createPost({
            title,
            author_id,
            category_id,
            description,
        });

        return posts;
    }
}
