import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { PrefixController } from '../base/base.routes';

@ApiTags('Student')
@PrefixController('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.studentService.findOne(_id);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(_id, updateStudentDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.studentService.remove(_id);
  }
}
