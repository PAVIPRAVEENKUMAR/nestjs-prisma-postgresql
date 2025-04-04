import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class Pagination {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  pageNumber: number;

  @IsNotEmpty()
  @IsIn([25, 50, 75, 100])
  @ApiProperty()
  pageSize: number;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ default: { by: 'createdAt', direction: 'asc' } })
  @IsObject()
  sort: {
    by: string;
    direction: 'asc' | 'desc';
  };
}