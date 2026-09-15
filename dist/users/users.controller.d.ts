import { UsersService } from './users.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        id_user: number;
    }>;
}
