import { CreateUserDto } from './DTO/create-user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        id_user: number;
    }>;
}
