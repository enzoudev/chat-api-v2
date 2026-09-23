import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateRoomDto } from './DTO/create-room.dto.js';


@Injectable()
export class RoomsService {
    constructor(private readonly prisma: PrismaService) {}

     async create (createRoomDto: CreateRoomDto) {

    
        const room = await this.prisma.room.create({
            data: {name: createRoomDto.name,
                }
            })
    
                return room
            }

        

}
