/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ICreatePostDTO } from 'src/modules/post/dto/ICreatePost.dto';
import { ICreatePostService } from 'src/modules/post/services/interfaces/ICreatePostService.interface';
import { IListPostService } from 'src/modules/post/services/interfaces/IListPostServices.interface';

@Controller('post')
export class PostController {
    constructor(
        @Inject('CreatePostService')
        private readonly CreatePostService: ICreatePostService,
        @Inject('ListPostServices')
        private readonly ListPostService: IListPostService,
    ) {}

    @Post('create')
    async createPost(
        @Body() { title, description, category_id, author_id }: ICreatePostDTO,
    ) {
        const post = await this.CreatePostService.execute({
            title,
            description,
            category_id,
            author_id,
        });

        return post;
    }

    @Get('list-all')
    async listAllPost() {
        return await this.ListPostService.listAll();
    }
}
