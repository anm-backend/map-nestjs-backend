import { Inject, Injectable } from '@nestjs/common';
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
    const data = await this.model.create(createStudentDto);

    return {
      success: true,
      data,
    };
  }

  async findAll() {
    const data = await this.model.find();

    return {
      success: true,
      data,
    };
  }

  async findOne(id: string) {
    const data = await this.model.findById(id);

    return {
      success: true,
      data,
    };
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const data = await this.model.findByIdAndUpdate(id, updateStudentDto);

    return {
      success: true,
      data,
    };
  }

  async remove(id: string) {
    const data = await this.model.findByIdAndDelete(id);

    return {
      success: true,
      data,
    };
  }
}
