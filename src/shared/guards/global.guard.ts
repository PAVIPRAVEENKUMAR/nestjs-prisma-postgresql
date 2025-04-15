import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, TokenExpiredError, verify, JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import { jwtPayload } from 'src/users/types/jwtPayload';
import { GUARD_KEY, ROLE_KEY } from '../constants';
import { UserRole} from '@prisma/client';

@Injectable()
export default class GlobalGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
      try {
          const isPublicRoute = this.reflector.get(GUARD_KEY, context.getHandler());
          if (isPublicRoute) return true;

          const request = context.switchToHttp().getRequest();
          const authHeader = request.headers['authorization'];

          if (!authHeader || !authHeader.startsWith('Bearer ')) {
              throw new HttpException('Missing or invalid Authorization header', HttpStatus.UNAUTHORIZED);
          }

          const token = authHeader.split(' ')[1];

          if (!token) {
              throw new HttpException('Token missing', HttpStatus.UNAUTHORIZED);
          }

          const secret = process.env.JWT_SECRET;
          if (!secret) {
              throw new Error('JWT_SECRET is not defined');
          }

          const canAccess = this.reflector.getAllAndMerge<UserRole[]>(ROLE_KEY, [
              context.getHandler(),
              context.getClass(),
          ]);

          const decoded = verify(token, secret) as JwtPayload;

          if (!decoded || typeof decoded !== 'object' || !decoded.sub || !decoded.email) {
              throw new HttpException('Invalid token payload', HttpStatus.FORBIDDEN);
          }

          const user: jwtPayload = {
              id: decoded.string,
              email: decoded.email,
              role: decoded.role as UserRole,
          };

          request.user = user;

          const isAuthorized = canAccess.includes(user.role);

          if (isAuthorized) return true;

          throw new HttpException('Not authorized to call this endpoint', HttpStatus.FORBIDDEN);

      } catch (error) {
          if (error instanceof TokenExpiredError) {
              throw new HttpException('Token expired', HttpStatus.UNAUTHORIZED);
          } else if (error instanceof JsonWebTokenError) {
              throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
          } else {
              throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
          }
      }
  }
}