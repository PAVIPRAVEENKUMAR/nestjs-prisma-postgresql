import { BadRequestException, NotFoundException, Injectable } from "@nestjs/common";
import { CreateJobOpeningDto} from './dto/create-job-opening.dto';
import { UpdateJobOpeningDto } from './dto/update-job-opening.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class JobopeningsService {
    constructor(private readonly prisma:PrismaService
){}

    async create(createJobOpeningDto: CreateJobOpeningDto) {
        const {
          internalJobCode,
          jobTitle,
          targetDate,
          initiationDate,
          numberOfVacancies,
          department,
          hiringManager,
          postingTitle
        } = createJobOpeningDto;
    
        //const jobTitleExists = await this.prisma.jobtitle.findUnique({where: {id: jobTitle}});

        //if (!jobTitleExists) throw new BadRequestException('Job Title not found');
    
        const departmentExists = await this.prisma.department.findUnique({ where: { id: department } });

        if (!departmentExists) throw new BadRequestException('Department not found');
    
        const hiringManagerExists = await this.prisma.user.findUnique({where: {id: hiringManager }});

        if (!hiringManagerExists) throw new BadRequestException('Hiring Manager not found');
    
        
        return await this.prisma.jobOpening.create({
          data: {
            internalJobCode,
            //jobTitle: { connect: { id: jobTitle } },
            department: { connect: { id: department } },
            hiringManager: { connect: { id: hiringManager } },
            postingTitle,
            targetDate,
            initiationDate,
            numberOfVacancies,
          },
        });
      }

      async findAll() {
        return await this.prisma.jobOpening.findMany({
          include: {
            jobTitle: true,
            department: true,
            hiringManager: true,
          },
        });
      }
    
      async findOne(id: string) {
        const job = await this.prisma.jobOpening.findUnique({
          where: { id },
          include: {
            jobTitle: true,
            department: true,
            hiringManager: true,
          },
        });
    
        if (!job) throw new NotFoundException('Job opening not found');
        return job;
      }
    
      async update(id: string, update: UpdateJobOpeningDto) {
        
        const job = await this.prisma.jobOpening.findUnique({ where: { id } });
        if (!job) throw new NotFoundException('Job opening not found');
    
        const updateData: any = {};
    
        if (update.jobTitle) {
          const exists = await this.prisma.jobtitle.findUnique({ where: { id: update.jobTitle } });
          if (!exists) throw new BadRequestException('Job Title not found');
          updateData.jobTitle = { connect: { id: update.jobTitle } };
        }

        if (update.department) {
          const exists = await this.prisma.department.findUnique({ where: { id: update.department } });
          if (!exists) throw new BadRequestException('Department not found');
          updateData.department = { connect: { id:update.department } };
        }
    
        if (update.hiringManager) {
          const exists = await this.prisma.user.findUnique({ where: { id:update.hiringManager } });
          if (!exists) throw new BadRequestException('Hiring Manager not found');
          updateData.hiringManager = { connect: { id: update.hiringManager } };
        }

    
        if (update.internalJobCode) updateData.internalJobCode = update.internalJobCode;
        if (update.postingTitle) updateData.postingTitle = update.postingTitle;
        if (update.targetDate) updateData.targetDate = update.targetDate;
        if (update.initiationDate) updateData.initiationDate = update.initiationDate;
        if (update.numberOfVacancies) updateData.numberOfVacancies = update.numberOfVacancies;
        if (update.salaryRange) updateData.salaryRange = update.salaryRange;
        if (update.address) updateData.address = update.address;
        if (update.jobDescription) updateData.jobDescription = update.jobDescription;
        if (update.requirements) updateData.requirements = update.requirements;
        if (update.benefits) updateData.benefits = update.benefits;
        if (update.industry) updateData.industry = update.industry;
        if (update.jobType) updateData.jobType = update.jobType;
        if (update.experienceLevel) updateData.experienceLevel = update.experienceLevel;
        if (update.jobLocation) updateData.jobLocation = update.jobLocation;
        return this.prisma.jobOpening.update({
          where: { id },
          data: updateData,
        });
      }
    
      async remove(id: string) {
        const job = await this.prisma.jobOpening.findUnique({ where: { id } });
        if (!job) throw new NotFoundException('Job opening not found');
    
        await this.prisma.jobOpening.delete({ where: { id } });
        return { message: `Job opening ${id} deleted.` };
      }
    }