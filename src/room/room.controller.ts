import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { OutputData, transformData } from '../utils/lib';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create')
  async create(@Body() createRoomDto: CreateRoomDto) {
    try {
      const createdRoom = await this.roomService.create(createRoomDto);
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

  @Get('list')
  async findAll() {
    try {
      const rooms = await this.roomService.findAll();
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

  @Get('read/:id')
  async findOne(@Param('id') id: string): Promise<{
    code: number;
    message: string;
    data?: OutputData;
  }> {
    // Use OutputData as the return type
    try {
      const room = await this.roomService.findOne(id);
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
