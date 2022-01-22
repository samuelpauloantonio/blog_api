import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ICreateCategoryDTO {
    @IsString()
    @MinLength(3)
    @ApiProperty({
        example: 'Notícias',
    })
    name: string;

    @ApiProperty({
        example: 'Ultimas notícias do dia',
    })
    description: string;
}
