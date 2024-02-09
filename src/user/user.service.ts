import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(uniqueAttr: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({ where: uniqueAttr });
  }

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }
}
