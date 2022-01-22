import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsMongoId } from 'class-validator';

export class ICreatePostDTO {
    @IsString()
    @ApiProperty({
        example: 'Post teste',
        description: 'Nome do post',
    })
    title: string;

    author_id: string;

    @ApiProperty({
        example: '61e95efb019c1441b0ba609a',
        description: 'Id da catégoria da notícia',
    })
    @IsMongoId()
    category_id: string;

    @ApiProperty({
        example: 'Descrição do post',
    })
    @IsString()
    description: string;
}

export class IUpdatePostDTO {
    @IsString()
    @ApiProperty({
        example: 'Post teste',
        description: 'Nome do post',
    })
    title: string;

    @ApiProperty({
        example: '61e95efb019c1441b0ba609a',
        description: 'Id da catégoria da notícia',
    })
    @IsMongoId()
    category_id: string;

    @ApiProperty({
        example: 'Descrição do post',
    })
    @IsString()
    description: string;

    id: string;
}

export class IFindPostByTitleDTO {
    @IsString()
    @ApiProperty({
        example: 'Post title',
    })
    title: string;
}

export class IFindPostByIdDTO {
    @IsMongoId()
    @ApiProperty({
        example: '61eb34e2d0e43926841af23b',
    })
    id: string;
}
