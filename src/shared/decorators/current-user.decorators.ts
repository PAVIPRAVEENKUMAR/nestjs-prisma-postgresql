import {
    createParamDecorator,
    ExecutionContext,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { verify } from 'jsonwebtoken';
  import { jwtPayload } from 'src/users/types/jwtPayload';
  import { HEADER_NAME } from '../constants';
  
export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
      const request = context.switchToHttp().getRequest();
      const jwt = request.headers[HEADER_NAME]?.split(' ')[1];
      if (!jwt) throw new HttpException('Token missing', HttpStatus.UNAUTHORIZED);
      const user = verify(jwt, process.env.JWT_SECRET as string, {}) as jwtPayload;
      return user;
    },
);