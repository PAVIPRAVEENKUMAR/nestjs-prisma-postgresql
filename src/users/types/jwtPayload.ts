import { UserRole } from '@prisma/client';

export type jwtPayload = {
  id: string;
  email: string;
  role: UserRole;
};