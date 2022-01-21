import { PostController } from './../../shared/infra/http/controllers/post/post.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories.module';
import { CreatePostService } from './services/postServices/CreatePost.service';
import { PostRepository } from './infra/mongo/mongoose/repositories/PostRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { post, PostSchema } from './infra/mongo/mongoose/schemas/post.schema';
import { ListPostServices } from './services/postServices/ListPost.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: post.name,
                schema: PostSchema,
            },
        ]),
        CategoriesModule,
    ],
    controllers: [PostController],
    providers: [
        { useClass: PostRepository, provide: 'PostRepository' },
        { useClass: CreatePostService, provide: 'CreatePostService' },
        { useClass: ListPostServices, provide: 'ListPostServices' },
    ],
})
export class PostModule {}
