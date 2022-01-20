import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateUserDTO } from 'src/modules/accounts/dto/createUserDTO';
import { IUserRepository } from 'src/modules/accounts/repositories/interfaces/IUserRepository';
import { user, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectModel(user.name)
        private readonly UserSchema: Model<UserDocument>,
    ) {}

    async createUser({
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<UserDocument> {
        const User = await this.UserSchema.create({
            name,
            email,
            password,
        });

        return await User.save();
    }

    async findOneByEmail(email: string): Promise<UserDocument> {
        return await this.UserSchema.findOne({ email });
    }
}
