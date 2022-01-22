import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
    @ApiProperty({
        example: '61e95efb019c1441b0ba609a',
    })
    _id: string;

    @ApiProperty({
        example: 'Samuel Antonio',
    })
    name: string;
    @ApiProperty({
        example: 'samueldev997@gmail.com',
    })
    email: string;

    posts?: any;
    @ApiProperty({
        example: '2022-01-20T15:47:43.620Z',
    })
    createdAt: Date;

    @ApiProperty({
        example: '2022-01-20T15:47:43.620Z',
    })
    updatedAt: Date;
}
