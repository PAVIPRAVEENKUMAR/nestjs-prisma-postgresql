import { SetMetadata } from '@nestjs/common';
import { ROLE_KEY } from '../constants';
import { UserRole } from 'aws-sdk/clients/workmail';

export const AllowRoles = (...roles: UserRole[]) =>
  SetMetadata(ROLE_KEY, roles);