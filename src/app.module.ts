import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { DepartmentModule } from './department/department.module';
import { JobOpeningModule } from './job-openings/job-openings.module';

@Module({
  imports: [PrismaModule, UserModule,DepartmentModule,JobOpeningModule,ConfigModule.forRoot({
    isGlobal: true,        
    envFilePath: '.env'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}