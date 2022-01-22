import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class ICreateUserDTO {
    @IsString()
    @ApiProperty({
        example: 'Samuel Antonio',
        description: 'Nome do Author ou usuário',
    })
    name: string;

    @ApiProperty({
        example: 'samueldev1997@gmail.com',
        description: 'Email do Author ou usuário',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '1234',
        description: 'Password',
    })
    @IsString()
    password: string;
}
