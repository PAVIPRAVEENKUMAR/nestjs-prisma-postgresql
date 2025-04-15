import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class JobAddressDto {
  
  @ApiProperty()
  @IsString()
  addressLine: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  province?: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  region?: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  country?: string;
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  postalCode?: string;
}