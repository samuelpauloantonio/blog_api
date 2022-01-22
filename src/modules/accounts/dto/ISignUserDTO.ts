import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ISignUserDTO {
    @ApiProperty({
        example: 'samuel@gmail.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '13455',
    })
    password: string;
}
