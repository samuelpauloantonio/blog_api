import {
    NotFoundException,
    Inject,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import auth from 'src/config/auth';

import { IUserRepository } from 'src/modules/accounts/repositories/interfaces/IUserRepository';

interface IPayload {
    sub: string;
}
export class ensureAuthenticated implements NestMiddleware {
    constructor(
        @Inject('UserRepository')
        private readonly UserRepository: IUserRepository,
    ) {}

    async use(request: Request, response: Response, next: NextFunction) {
        try {
            const authHeader = request.headers.authorization;

            if (!authHeader)
                throw new UnauthorizedException('token is missing!');

            const [, token] = authHeader.split(' ');

            const { secret_token } = auth;
            const { sub: user_id } = verify(token, secret_token) as IPayload;

            const user = await this.UserRepository.findOneById(user_id);

            if (!user) throw new NotFoundException('User Does Not found');

            request.user = {
                id: user.id,
            };

            next();
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
    }
}
