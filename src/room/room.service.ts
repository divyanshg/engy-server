import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    const newRoom = await this.prisma.room.create({
      data: {
        name: createRoomDto.name,
      },
    });

    return newRoom;
  }

  async findAll() {
    return await this.prisma.room.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.room.findUnique({
      where: {
        id,
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
