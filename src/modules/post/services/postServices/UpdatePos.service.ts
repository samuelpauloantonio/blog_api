import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUpdatePostDTO } from '../../dto/ICreatePost.dto';
import { IPostResponseDTO } from '../../dto/IPostResponse.dto';
import { PostMap } from '../../mapper/PostMap';
import { ICategoriesRepository } from '../../repositories/interfaces/ICategoriesRepository';
import { IPostRepository } from '../../repositories/interfaces/IPostRepository';

@Injectable()
export class UpdatePostService {
    constructor(
        @Inject('PostRepository')
        private readonly PostRepository: IPostRepository,

        @Inject('CategoriesRepository')
        private readonly CategoryRepository: ICategoriesRepository,
    ) {}

    async update({
        title,
        category_id,
        description,
        id,
    }: IUpdatePostDTO): Promise<IPostResponseDTO> {
        const findPost = await this.PostRepository.findOneById(id);

        if (!findPost) {
            throw new NotFoundException('Post Not found');
        }
        const categories = await this.CategoryRepository.listAllCategory();

        if (!categories.find((category) => category.id === category_id)) {
            throw new NotFoundException('Category not found');
        }

        const post = await this.PostRepository.updatePost({
            title,
            id,
            category_id,
            description,
        });

        return PostMap.toDTO(post);
    }
}
