import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { UsersService } from './user.service';
  import { randomBytes, scrypt as _scrypt } from 'crypto';
  import { promisify } from 'util';
  import { sign } from 'jsonwebtoken';
  import { CreateUserDto } from './dto/create-user.dto';
  import { jwtPayload } from './types/jwtPayload';
  import { UserRole,User } from '@prisma/client';
  
  const scrypt = promisify(_scrypt);
  
  @Injectable()
  export class AuthService {
    constructor(private usersService: UsersService) {}
  
    async signup(body: CreateUserDto) {
      const users = await this.usersService.findByEmail(body.email);
      if (users) {
        throw new BadRequestException('email already exist');
      } 
      body.password = decodeURI(body.password);
  
      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(body.password, salt, 32)) as Buffer;
      const result = salt + '.' + hash.toString('hex');
      
      const user = await this.usersService.create({
        ...body,
        password: result,
      });
  
      const jwtPayload: jwtPayload = {
        email: user.email,
        id: user.id.toString(),
        role: user.role as UserRole,
      };
  
      return sign(jwtPayload, process.env.JWT_SECRET as string, { expiresIn: '24h' });
    }
  
    async signin(email: string, password: string) {
      password = decodeURI(password);
      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const [salt, storedhash] = user.password.split('.');
      const hash = (await scrypt(password, salt, 32)) as Buffer;
  
      if (storedhash !== hash.toString('hex')) {
        throw new BadRequestException('bad password');
      }
  
      const jwtPayload: jwtPayload = {
        email: user.email,
        id: user.id.toString(),
        role: user.role as UserRole,
      };
  
      return sign(jwtPayload, process.env.JWT_SECRET as string, { expiresIn: '24h' });
    }
  
    async passwordhash(password: string) {
      password = decodeURI(password);
  
      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;
      const result = salt + '.' + hash.toString('hex');
      return result;
    }
  
    googleLogin(req) {
      if (!req.user) {
        return 'No user from google';
      }
  
      return {
        message: 'User information from google',
        user: req.user,
      };
    }
  }