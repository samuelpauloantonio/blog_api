import { AuthorController } from '../../../shared/infra/http/controllers/author.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorRepository } from '../infra/mongo/mongoose/repositories/AuthorRepository';
import {
    AuthorSchema,
    author,
} from '../infra/mongo/mongoose/schemas/author.schema';
import { CreateAuthorService } from './createAuthor/createAuthor.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: author.name, schema: AuthorSchema },
        ]),
    ],
    controllers: [AuthorController],
    providers: [
        {
            useClass: AuthorRepository,
            provide: 'AuthorRepository',
        },

        {
            useClass: CreateAuthorService,
            provide: 'CreateAuthorService',
        },
    ],
})
export class AuthorModule {}
