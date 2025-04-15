import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  phonenumber: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({
    enum: [...Object.values(UserRole)],
  })
  @IsEnum(UserRole)
  role:UserRole;
}