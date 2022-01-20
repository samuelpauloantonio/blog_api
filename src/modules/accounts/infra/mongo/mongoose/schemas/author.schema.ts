import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthorDocument = author & Document<any>;

@Schema({ timestamps: true })
export class author {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const AuthorSchema = SchemaFactory.createForClass(author);
