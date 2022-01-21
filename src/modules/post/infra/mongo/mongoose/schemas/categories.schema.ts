import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDocument = categories & Document<any>;

@Schema({ timestamps: true })
export class categories {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(categories);
