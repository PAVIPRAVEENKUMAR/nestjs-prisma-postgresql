import { UserRole } from '@prisma/client';

export type jwtPayload = {
  id: number;
  email: string;
  role: UserRole;
};