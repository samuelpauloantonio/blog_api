import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { users } from 'src/modules/accounts/infra/mongo/mongoose/schemas/user.schema';
import { categories } from './categories.schema';

export type PostDocument = post & mongoose.Document<any>;

@Schema({ timestamps: true })
export class post {
    @Prop()
    title: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    })
    author: users;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
    })
    category: categories;

    @Prop()
    description: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(post);
