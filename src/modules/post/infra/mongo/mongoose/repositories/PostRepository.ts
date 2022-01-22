import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
    ICreatePostDTO,
    IUpdatePostDTO,
} from 'src/modules/post/dto/ICreatePost.dto';
import { IPostRepository } from 'src/modules/post/repositories/interfaces/IPostRepository';
import { post, PostDocument } from '../schemas/post.schema';

@Injectable()
export class PostRepository implements IPostRepository {
    constructor(
        @InjectModel(post.name)
        private readonly PostModel: Model<PostDocument>,
    ) {}

    async createPost({
        title,
        author_id,
        category_id,
        description,
    }: ICreatePostDTO): Promise<PostDocument> {
        const post = await this.PostModel.create({
            title,
            author: author_id,
            category: category_id,
            description,
        });

        return await post.save();
    }

    async listAllPost(): Promise<PostDocument[]> {
        return await this.PostModel.find()
            .populate('author')
            .populate('category');
    }
    async findOneByTitle(title: any): Promise<PostDocument> {
        return await this.PostModel.findOne({
            title: { $regex: `${title}`, $options: '' },
        });
    }
    async findOneById(_id: string): Promise<PostDocument> {
        return await this.PostModel.findById({ _id });
    }

    async updatePost({
        category_id,
        description,
        id,
        title,
    }: IUpdatePostDTO): Promise<PostDocument> {
        const post = await this.PostModel.findOneAndUpdate(
            { _id: id },
            { category: category_id, description, title },
            {
                new: true,
            },
        );

        return post;
    }
    async deletePost(id: string): Promise<void> {
        await this.PostModel.findByIdAndRemove(id);
    }
}
