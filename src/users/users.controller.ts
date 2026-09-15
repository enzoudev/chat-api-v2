import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './DTO/create-user.dto.js';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){

        return this.userService.create(createUserDto)
    }

}
