import { Request } from 'express';

import {
    Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OutputData, transformData } from '../utils/lib';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createRoomDto: CreateRoomDto, @Req() { user }: Request) {
    try {
      console.log('User', user);
      const createdRoom = await this.roomService.create({
        ...createRoomDto,
        ownerId: user.userId,
      });
      return {
        code: 201,
        message: 'Room created successfully',
        data: createdRoom,
      };
    } catch (e) {
      return {
        code: 500,
        message: e.message,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async findAll(@Req() { user }: Request) {
    try {
      const rooms = await this.roomService.findAll(user.userId);
      return {
        code: 200,
        data: rooms,
      };
    } catch (err) {
      return {
        code: 500,
        message: err.message,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('read/:id')
  async findOne(
    @Param('id') id: string,
    @Req() { user }: Request,
  ): Promise<{
    code: number;
    message: string;
    data?: OutputData;
  }> {
    // Use OutputData as the return type
    try {
      const room = await this.roomService.findOne(id, user.userId);
      if (!room) {
        return {
          code: 404,
          message: 'Room not found',
        };
      }

      const result = await transformData(room as never);

      return {
        code: 200,
        message: 'Room found',
        data: result,
      };
    } catch (err) {
      return {
        code: 500,
        message: err.message,
      };
    }
  }

  // @Get('update/:id')
  // async update(@Param('id') id: string, @Query() query: UpdateRoomDto) {
  //   try {
  //     await this.roomService.update(id, query);

  //     return {
  //       code: 200,
  //       message: 'Room updated successfully',
  //     };
  //   } catch (err) {
  //     return {
  //       code: 500,
  //       message: err.message,
  //     };
  //   }
  // }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.roomService.remove(id);
  }
}
