/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from 'src/modules/accounts/repositories/interfaces/IUserRepository';
import { ICreatePostDTO } from '../../dto/ICreatePost.dto';
import { IPostResponseDTO } from '../../dto/IPostResponse.dto';
import { PostMap } from '../../mapper/PostMap';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';

@Injectable()
export class CreatePostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,

        @Inject('CategoriesRepository')
        private readonly CategoryRepository: ICategoriesRepository,
    ) {}

    async execute({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<IPostResponseDTO> {
        const author = await this.UserRepository.findOneById(author_id);
        const categories = await this.CategoryRepository.listAllCategory();

        if (!author) {
            throw new NotFoundException('User not found');
        }

        if (!categories.find((category) => category.id === category_id)) {
            throw new NotFoundException('Category not found');
        }

        const post = await this.PostRepository.createPost({
            title,
            author_id,
            category_id,
            description,
        });

        return PostMap.toDTO(post);
    }
}
