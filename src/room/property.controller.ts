import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertyService } from './property.service';

@Controller('rooms/:room_id/property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post('create')
  async create(
    @Body() createPropertyDto: CreatePropertyDto,
    @Param('room_id') room_id: string,
  ) {
    try {
      const createdProperty = await this.propertyService.create({
        ...createPropertyDto,
        room_id,
      });
      return {
        code: 201,
        message: 'Property created successfully',
        data: createdProperty,
      };
    } catch (e) {
      return {
        code: 500,
        message: e.message,
      };
    }
  }

  @Get('list')
  async findAll(@Param('room_id') room_id: string) {
    try {
      const properties = await this.propertyService.findAll(room_id);
      return {
        code: 200,
        data: properties,
      };
    } catch (err) {
      return {
        code: 500,
        message: err.message,
      };
    }
  }

  @Get('update')
  async update(
    @Query('name') name: string,
    @Query('value') value: string,
    @Param('room_id') room_id: string,
  ) {
    try {
      const updatedProperty = await this.propertyService.update(
        room_id,
        name,
        value,
      );
      return {
        code: 200,
        message: 'Property updated successfully',
        data: updatedProperty,
      };
    } catch (e) {
      return {
        code: 500,
        message: e.message,
      };
    }
  }
}
