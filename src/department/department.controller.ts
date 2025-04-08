import { Controller,Get,Post,Body,Patch,Param,Delete,} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GetDepartmentDto } from './dto/get-department.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AllowRoles } from 'src/shared/decorators/allowRoles.decorator';
import { UserRole} from '@prisma/client';
import { CurrentUser } from 'src/shared/decorators/current-user.decorators';
import { jwtPayload } from 'src/users/types/jwtPayload';

@Controller('department')
@ApiTags('Department')
@ApiBearerAuth()
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }

  @Post()
  @AllowRoles(UserRole.ADMIN)
  create(@Body() createDepartmentDto: CreateDepartmentDto,
    @CurrentUser() user: jwtPayload) {
    return this.departmentService.create(createDepartmentDto, user);
  }

  @Post('/all')
  @AllowRoles(UserRole.ADMIN)
  findAll(@Body() body: GetDepartmentDto) {
    return this.departmentService.findAll(body);
  }

  @Get(':id')
  @AllowRoles(UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Patch(':id')
  @AllowRoles(UserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  @AllowRoles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.departmentService.remove(id);
  }
}