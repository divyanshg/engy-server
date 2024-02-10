import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    const newRoom = await this.prisma.room.create({
      data: {
        name: createRoomDto.name,
        ownerId: createRoomDto.ownerId,
        properties: {
          create: {
            name: 'occupants',
          },
        },
      },
    });

    return newRoom;
  }

  async findAll(ownerId: string) {
    return await this.prisma.room.findMany({
      where: {
        ownerId,
      },
    });
  }

  async findOne(id: string, ownerId: string) {
    return await this.prisma.room.findUnique({
      where: {
        id,
        ownerId,
      },
      include: {
        properties: {
          include: {
            values: true,
          },
        },
      },
    });
  }

  async findByKey(apiKey: string, room_id: string) {
    return await this.prisma.room.findUnique({
      where: {
        owner: {
          apiKey,
        },
        id: room_id,
      },
    });
  }

  // async update(id: string, updateRoomDto: UpdateRoomDto) {
  //   return await this.prisma.room.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       topics: updateRoomDto.occupants,
  //     },
  //   });
  // }

  async remove(id: string) {
    return await this.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
