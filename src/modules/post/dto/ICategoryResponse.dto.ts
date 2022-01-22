import { ApiProperty } from '@nestjs/swagger';

export class ICategoryResponseDTO {
    @ApiProperty({
        example: '61eb42258ba2203554c1a2e6',
    })
    '_id': string;

    @ApiProperty({
        example: 'Filmes',
    })
    name: string;

    @ApiProperty({
        example: 'todos as noticias',
    })
    description: string;

    @ApiProperty({
        example: '2022-01-21T23:30:45.408Z',
    })
    createdAt: Date;

    @ApiProperty({
        example: '2022-01-21T23:30:45.408Z',
    })
    updatedAt: Date;
}
