import { ApiProperty } from '@nestjs/swagger';

export class IPostResponseDTO {
    @ApiProperty({
        example: '61eb42258ba2203554c1a2e6',
    })
    _id: string;

    @ApiProperty({
        example: 'Titulo do post',
    })
    title: string;

    @ApiProperty({
        example: {
            _id: '61eb42258ba2203554c1a2e6',
            name: 'Nome da Categoria',
            description: 'Descrição',
        },
    })
    category: {
        _id: any;
        name: string;
        description: string;
    };

    @ApiProperty({
        example: {
            _id: '61eb42258ba2203554c1a2e6',
            name: 'Nome do author',
            email: 'email do author ou usuario',
        },
    })
    author: {
        _id: string;
        name: string;
        email: string;
    };

    @ApiProperty({
        example: '2022-01-21T23:30:45.408Z',
    })
    createdAt: Date;

    @ApiProperty({
        example: '2022-01-21T23:30:45.408Z',
    })
    updatedAt: Date;
}
