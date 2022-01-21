import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import authConfig from 'src/config/auth';
import { AuthenticateUser } from 'src/shared/infra/http/controllers/users/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { ListUsersServices } from '../services/listUser/listUser.service';
import { UserModule } from '../services/user.module';
const { secret_token, expires_in_token } = authConfig;

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: secret_token,
            signOptions: { expiresIn: expires_in_token },
        }),
    ],
    controllers: [AuthenticateUser],
    providers: [
        AuthService,

        { useClass: ListUsersServices, provide: 'ListUserServices' },
    ],

    exports: [AuthService],
})
export class AuthModule {}
