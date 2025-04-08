import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { GetDepartmentDto } from './dto/get-department.dto';
import { jwtPayload } from 'src/users/types/jwtPayload';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
    constructor(private readonly prisma: PrismaService) {}

    async create (
        createDepartmentDto: CreateDepartmentDto,
        CurrentUser:jwtPayload){
        const department = await this.prisma.department.findUnique({
            where: { name: createDepartmentDto.name }
        });
        if(department) {
            throw new BadRequestException('Department already exists')
        }
        const leadUser = await this.prisma.user.findUnique({
            where: { id:createDepartmentDto.departmentLead }
        });

        if(!leadUser) throw new NotFoundException('Department Lead not found');

        const createdBy = await this.prisma.user.findUnique({
            where:{id:CurrentUser.id}
        });

        if(!createdBy) throw new NotFoundException('Creator user not found');

        return this.prisma.department.create({
            data: {
                name:createDepartmentDto.name,
                departmentLead:{connect:{id:createDepartmentDto.departmentLead}},
                createdBy:{connect: {id:CurrentUser.id}},
            },
        });
    }

    async findAll(getDepartmentDto: GetDepartmentDto) {
        const {
            name,
            departmentLead,
            pageSize=10,
            pageNumber=1,
            sort={by:'createdAt', direction:'asc'},
        }=getDepartmentDto;
        
        const skip =(pageNumber-1)*pageSize;
        const orderBy = {
            [sort.by]:sort.direction,
        };
        const where: any ={};

        if(name){
            where.name={contains:name, mode:'insensitive'};
        }
        if(departmentLead) {
            where.departmentLeadId = departmentLead;
        }

        const [departments, total] = await this.prisma.$transaction([
            this.prisma.department.findMany({
                where,
                skip,
                take:pageSize,
                orderBy,
                include:{
                    departmentLead:true,
                    createdBy:true,
                },
            }),
            this.prisma.department.count({where}),
        ]);
        return {
            data:departments,
            total,
            pageNumber,
            pageSize,
        };
    }

    async findOne (id: string) {
        const department = await this.prisma.department.findUnique({
            where:{id},
            include:{
                departmentLead:true,
                createdBy:true,
            },
        });
        if(!department){
            throw new NotFoundException('Department not found');
        }
        return department;
    }

    async update(id: string,updateDepartmentDto:UpdateDepartmentDto){

        const existing = await this.prisma.department.findUnique({where:{id}});
        if(!existing){
            throw new NotFoundException('Department not found');
        }
        return this.prisma.department.update({
            where:{id},
            data:{
                name:updateDepartmentDto.name,
            },
        });
    }

    async remove(id:string){
        return this.prisma.department.delete({
            where:{id},
        });
    }
}