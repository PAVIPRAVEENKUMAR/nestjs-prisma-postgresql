import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Pagination } from 'src/shared/dtos/pagination.dto';

export class GetDepartmentDto extends Pagination {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  departmentLead?: string;
}