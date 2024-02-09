import { Module } from '@nestjs/common';

import { MediaServerModule } from './media-server/media-server.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { RoomModule } from './room/room.module';
import { GatewayModule } from './gateway/gateway.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MediaServerModule, RoomModule, PrismaModule, GatewayModule, UserModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
