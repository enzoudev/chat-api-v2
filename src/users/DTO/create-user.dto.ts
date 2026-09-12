import {IsNotEmpty, MinLength, IsString, IsEmail} from 'class-validator'


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string
}