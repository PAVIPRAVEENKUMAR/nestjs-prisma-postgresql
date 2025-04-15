import { Module } from '@nestjs/common';
import { JobopeningsService } from './job-openings.service';
import { JobOpeningsController } from './job-openings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [JobOpeningsController],
  providers: [JobopeningsService,PrismaService],
  exports: [JobopeningsService],
})
export class JobOpeningModule {}