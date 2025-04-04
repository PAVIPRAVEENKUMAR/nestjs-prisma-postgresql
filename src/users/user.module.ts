import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService,AuthService],
  controllers: [UsersController]
})
export class UserModule {}