import {Controller,Get,Post,Body,Patch,Param,Delete} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowRoles } from '../shared/decorators/allowRoles.decorator';
import {UserRole} from '@prisma/client';
import { AuthService } from './auth.service';
import { Serialize } from 'src/shared/interceptors/serialize.interceptor';
import { UserEntity, UsersEntity } from './entities/user.entity';
import { CurrentUser } from 'src/shared/decorators/current-user.decorators';
import { jwtPayload } from './types/jwtPayload';
import { DisableGuard } from 'src/shared/decorators/disableGuard.decorator';
import { signinDto } from './dto/signin-user.dto';
  
  @Controller('users')
  @ApiTags('Users')
  @ApiBearerAuth()
  export class UsersController {
    constructor(private readonly usersService: UsersService,
        private readonly authService:AuthService,
    ) {}

  @Get('/whoami')
  @Serialize(UserEntity)
  @AllowRoles(UserRole.ADMIN, UserRole.STAFF)
  @ApiOperation({ description: 'Get the information of the current user.' })
  async whoAmI(@CurrentUser() data: jwtPayload) {
    const user = await this.usersService.findOne(data.id);
    return user;
  }
  
  @Post('/signup')
  @ApiOperation({ description: 'Create a new user.' })
  @DisableGuard()
    async create(@Body() body: CreateUserDto) {
      return this.authService.signup(body);
    }

  @Post('/signin')
  @ApiOperation({description:'Signin a user.'})
  @DisableGuard()
    async signin(@Body() body:signinDto) {
      const user = await this.authService.signin(body.email, body.password)
      return user;
    }

  @Get()
  @Serialize(UserEntity)
  @ApiOperation({ description: 'Find all users.' })
  @AllowRoles(UserRole.ADMIN)
    async findAll() {
      const users = await this.usersService.findAll();
      return users;
    }
  
  @Post('/getandcount')
  @Serialize(UsersEntity)
  @ApiOperation({ description: 'Find all users with pagination.' })
  @AllowRoles(UserRole.ADMIN)
    async findAllAndCount(@Body() body: GetUsersDto) {
      return this.usersService.findAllAndCount(body);
    }
  
  @Get(':id')
  @ApiOperation({ description: 'Find a user by id.' })
  @AllowRoles(UserRole.ADMIN, UserRole.STAFF)
    async findOne(@Param('id') id:string) {
      return this.usersService.findOne(id);
    }
  
  @Patch(':id')
  @ApiOperation({ description: 'Update a user by id.' })
  @AllowRoles(UserRole.ADMIN)
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(id, updateUserDto);
    }
  
  @Delete(':id')
  @ApiOperation({ description: 'Delete a user by id.' })
  @AllowRoles(UserRole.ADMIN)
    async remove(@Param('id') id:string) {
      return this.usersService.remove(id);
    }
  }