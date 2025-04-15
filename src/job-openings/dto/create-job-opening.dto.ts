import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty, IsDate, IsArray, IsOptional, IsNumber} from "class-validator";
import {Type} from 'class-transformer';
import {Industries,JobLocation, JobType,WorkExperience,} from 'src/shared/enums/JobOpening.enum';
import { JobAddressDto } from './address.dto';

export class CreateJobOpeningDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  internalJobCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  postingTitle:string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  jobTitle: number;

  @ApiProperty()
  @IsString()
  department: string;

  @ApiProperty()
  @IsArray()
  assignedRecruiters?: string[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  hiringManager: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  numberOfVacancies: number;

  @ApiProperty()
  @IsEnum(Industries)
  industry: Industries;

  @ApiProperty()
  @IsEnum(JobType)
  jobType: JobType;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  initiationDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  targetDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  salaryRange?: string;

  @ApiProperty()
  @IsEnum(WorkExperience)
  experienceLevel: WorkExperience;

  @ApiProperty()
  @IsEnum(JobLocation)
  jobLocation: JobLocation;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address?: JobAddressDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  requirements?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  jobDescription?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  benefits?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  applicationQuestions?: string[];
}