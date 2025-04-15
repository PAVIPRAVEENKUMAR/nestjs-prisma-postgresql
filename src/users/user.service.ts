import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { UserRole, User } from '@prisma/client';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
        select: { id: true, email: true, role: true },
      });
      if (existingUser) {
        throw new BadRequestException('Email already exists');
      }
      const newUser = await this.prisma.user.create({
        data: {
          email: data.email,
          password:  data.password,
          name:  data.name,
          role:  data.role as UserRole,
          isSignedUp: true,
        },
      });
      return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findAllAndCount(dto: GetUsersDto) {
    const { page = 1, limit = 10 } = dto;
    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.user.count(),
    ]);
    return { users, total, page, limit };
  }
   
  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id},
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async update(id:string, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id},
      data,
    });
  }

  async remove(id:string) {
    await this.prisma.user.delete({
      where: {id},
    });

    return { message: `User with ID ${id} deleted` };
  }
}