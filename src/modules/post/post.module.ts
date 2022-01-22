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
import { UserRepository } from '../accounts/infra/mongo/mongoose/repositories/UserRepository';
import {
    users,
    UserSchema,
} from '../accounts/infra/mongo/mongoose/schemas/user.schema';
import { ListCategoryService } from './services/categoriesServices/ListCategoryService';
import {
    categories,
    CategorySchema,
} from './infra/mongo/mongoose/schemas/categories.schema';
import { CategoryRepository } from './infra/mongo/mongoose/repositories/CategoriesRepository';
import { UpdatePostService } from './services/postServices/UpdatePos.service';
import { CreatePostController } from 'src/shared/infra/http/controllers/post/CreatePost.controller';
import { ListPostController } from 'src/shared/infra/http/controllers/post/listPost.controller';
import { UpdatePostController } from 'src/shared/infra/http/controllers/post/UpdatePost.controller';
import { DeletePostService } from './services/postServices/DeletePos.service';
import { DeletePostController } from 'src/shared/infra/http/controllers/post/DeletePost.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: post.name,
                schema: PostSchema,
            },
            { name: users.name, schema: UserSchema },
            { name: categories.name, schema: CategorySchema },
        ]),
        CategoriesModule,
    ],
    controllers: [
        CreatePostController,
        ListPostController,
        UpdatePostController,
        DeletePostController,
    ],
    providers: [
        { useClass: PostRepository, provide: 'PostRepository' },
        { useClass: CreatePostService, provide: 'CreatePostService' },
        { useClass: ListPostServices, provide: 'ListPostServices' },
        { useClass: UpdatePostService, provide: 'UpdatePostService' },
        { useClass: DeletePostService, provide: 'DeletePostService' },
        {
            useClass: UserRepository,
            provide: 'UserRepository',
        },
        { useClass: CategoryRepository, provide: 'CategoriesRepository' },
    ],
})
export class PostModule {}
