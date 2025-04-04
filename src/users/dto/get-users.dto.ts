import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';
import { Pagination } from 'src/shared/dtos/pagination.dto';
import { UserRole } from '@prisma/client';

export class GetUsersDto extends Pagination {
  @ApiProperty()
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum([...Object.values(UserRole)])
  role?: UserRole;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  createdAt?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  page?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  limit?: number;
}