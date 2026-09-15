import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    
    constructor (private readonly prisma: PrismaService) {}


    async create (createUserDto: CreateUserDto) {
        try {


            const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

            const user = await this.prisma.user.create({
                data: {name: createUserDto.name,
                email: createUserDto.email,
                password: hashedPassword}
            })

            return user
        }

        catch(err: any){
            if(err.code === "P2002") {
                throw new ConflictException("Esse e-mail já está cadastrado")
            }

            throw err
        }
    }
}
