import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateAuthorDTO } from 'src/modules/accounts/dto/createAuthorDTO';
import { IAuthorRepository } from 'src/modules/accounts/repositories/IAuthorRepository';
import { author, AuthorDocument } from '../schemas/author.schema';

@Injectable()
export class AuthorRepository implements IAuthorRepository {
    constructor(
        @InjectModel(author.name)
        private readonly AuthorSchema: Model<AuthorDocument>,
    ) {}
    async createAuthor({
        name,
        email,
        password,
    }: ICreateAuthorDTO): Promise<AuthorDocument> {
        const Author = await this.AuthorSchema.create({
            name,
            email,
            password,
        });

        return await Author.save();
    }
}
