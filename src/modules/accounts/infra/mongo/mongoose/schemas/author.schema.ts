import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICreateAuthorDTO } from 'src/modules/accounts/dto/createAuthorDTO';

export type AuthorDocument = author & Document<ICreateAuthorDTO>;

@Schema({ timestamps: true })
export class author {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const AuthorSchema = SchemaFactory.createForClass(author);
