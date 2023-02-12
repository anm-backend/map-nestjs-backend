import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './schemas/student.schema';
import { BaseService } from '../base/base.service';
import { schemaConfigs } from 'src/config/configuration';
import { Model } from 'mongoose';

@Injectable()
export class StudentService extends BaseService<
  Student,
  CreateStudentDto | UpdateStudentDto
> {
  constructor(
    @Inject(schemaConfigs.STUDENT_MODEL.toString())
    private studentModel: Model<Student, {}>,
  ) {
    super(studentModel);
  }

  async create(createStudentDto: CreateStudentDto) {
    try {
      const data = await this.model.create(createStudentDto);

      return {
        success: true,
        data,
      };
    } catch (error) {
      // throw new HttpException('Create error', HttpStatus.BAD_REQUEST);
      // throw new HttpException(
      //   { status: HttpStatus.BAD_REQUEST, error },
      //   HttpStatus.BAD_REQUEST,
      // );
      throw new BadRequestException(error);
      // return {
      //   success: false,
      //   error,
      // };
    }
  }

  async findAll() {
    const page: number = 1;
    const limit: number = 10;
    try {
      const data: Student[] = await this.model
        .find()
        .limit(limit)
        .skip((page - 1) * limit);

      return {
        success: true,
        count: data.length,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.model.findById(id);

      return {
        success: true,
        data,
      };
    } catch (error) {
      throw new NotFoundException(error);
      // return {
      //   success: false,
      //   error,
      // };
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    try {
      const data = await this.model.findByIdAndUpdate(id, updateStudentDto);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }

  async remove(id: string) {
    try {
      const data = await this.model.findByIdAndDelete(id);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }
}
