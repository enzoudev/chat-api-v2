import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateRoomDto } from './DTO/create-room.dto.js';

@Injectable()
export class RoomsService {
    constructor(private readonly prisma: PrismaService) {}

     async create (createRoomDto: CreateRoomDto) {
            try {
    
    
                
    
                const user = await this.prisma.user.create({
                    data: {name: createRoomDto.name,
                    }
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
