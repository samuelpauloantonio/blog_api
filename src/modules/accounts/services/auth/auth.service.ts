import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { ISignUserDTO } from '../../dto/ISignUserDTO';
import { IListUserService } from '../interfaces/IListUser.service.interface';
import { IResponseSign } from '../interfaces/IResponseSign';

@Injectable()
export class AuthService {
    constructor(
        @Inject('ListUserServices')
        private readonly ListUserServices: IListUserService,
        private jwtService: JwtService,
    ) {}

    async execute({ email, password }: ISignUserDTO): Promise<IResponseSign> {
        const user = await this.ListUserServices.findOneByEmail(email);

        if (!user || (user && !(await compare(password, user.password)))) {
            throw new UnauthorizedException('Email or password incorrect!');
        }

        const token = this.jwtService.sign({
            username: user.name,
            sub: user._id,
        });

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
}
