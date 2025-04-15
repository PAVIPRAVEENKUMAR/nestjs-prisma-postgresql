import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException} from '@nestjs/common';
import { JobopeningsService } from './job-openings.service';
import { CreateJobOpeningDto } from './dto/create-job-opening.dto';
import { UpdateJobOpeningDto } from './dto/update-job-opening.dto';
import { ApiTags,ApiBearerAuth } from '@nestjs/swagger';
import { AllowRoles } from 'src/shared/decorators/allowRoles.decorator';
import { UserRole } from '@prisma/client';

@Controller('job-openings')
@ApiTags('Job Openings')
@ApiBearerAuth()
export class JobOpeningsController {
  constructor(private readonly jobOpeningsService: JobopeningsService) {}

  @Post("create-job-openings")
  @AllowRoles(UserRole.ADMIN)
  async create(@Body() createJobOpeningDto: CreateJobOpeningDto) {
    try{
    return this.jobOpeningsService.create(createJobOpeningDto);
  } catch(error){
    throw new HttpException(
      'Error creating job opening',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

  @Get()
  @AllowRoles(UserRole.ADMIN)
  async findAll() {
    try{
    return this.jobOpeningsService.findAll();
  }catch (error){
    throw new HttpException(
      'Error in find job openings',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

  @Get(':id')
  @AllowRoles(UserRole.ADMIN)
  async findOne(@Param('id')id: string) {
    try{
    return this.jobOpeningsService.findOne(id);
  } catch (error){
    throw new HttpException('Job opening not found', HttpStatus.NOT_FOUND)
  }
}

  @Patch(':id')
  @AllowRoles(UserRole.ADMIN)
  async update(
    @Param('id')id: string,
    @Body() updateJobOpeningDto: UpdateJobOpeningDto,
  ) {
    try{
    return this.jobOpeningsService.update(id, updateJobOpeningDto);
    } catch(error){
      throw new HttpException('Job opening update failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @AllowRoles(UserRole.ADMIN)
  async remove(@Param('id')id: string) {
    try{
    return this.jobOpeningsService.remove(id);
  }catch (error){
    throw new HttpException('Job opening deletion failed', HttpStatus.NOT_FOUND);
  }
  }
}
