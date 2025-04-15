import { Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { UserRole} from '@prisma/client';

export class UserEntity {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  phonenumber: string;

  @Expose()
  name: string;

  @Expose()
  role: UserRole;

  @Expose()
  userType: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class UsersEntity {
  @Expose()
  @IsArray()
  @Type(() => UserEntity)
  data: UserEntity[];

  @Expose()
  count: number;
}