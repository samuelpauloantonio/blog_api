/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories.module';

@Module({
    imports: [CategoriesModule],
    controllers: [],
    providers: [],
})
export class PostModule {}
