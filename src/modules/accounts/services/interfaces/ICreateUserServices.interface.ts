import { ICreateUserDTO } from '../../dto/createUserDTO';
import { UserResponseDTO } from '../../dto/UserResponseDTO';

export interface ICreateUserServices {
    execute({
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<UserResponseDTO>;
}
