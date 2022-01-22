import { ApiProperty } from '@nestjs/swagger';

export class IResponseSign {
    @ApiProperty({
        example: {
            name: 'Samuel Antonio',
            email: 'samueldev1997@gmail.com',
        },
    })
    user: {
        name: string;
        email: string;
    };
    @ApiProperty({
        example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbXVlbCIsInN1YiI6IjYxZTk4OWI0M2M2YjZkNDNmMDk0ODhlZCIsImlhdCI6MTY0MjgwMzQ3NiwiZXhwIjoxNjQyODA1Mjc2fQ.xPiK_6TpCGsaYE90vFhhe8v3v5IMB_GEKy-Y89u8VMk',
    })
    token: string;
}
