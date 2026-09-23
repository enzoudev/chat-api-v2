import { Controller, Post, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { RoomsService } from './rooms.service.js';
import { CreateRoomDto } from './DTO/create-room.dto.js';

@Controller('rooms')
export class RoomsController {

    constructor(private readonly roomsService: RoomsService) {}

    @Post()
    create(@Body() createRoomDto: CreateRoomDto){
        return this.roomsService.create(createRoomDto)
    }

    @Patch(':id')
    renameRoom(
    @Param('id', ParseIntPipe) id: number,    
    @Body() newName: string ){
        return this.roomsService.renameRoom(id, newName)
    }
}
