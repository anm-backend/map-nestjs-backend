// https://docs.nestjs.com/guards
// https://docs.nestjs.com/interceptors
// https://docs.nestjs.com/middleware

import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  // ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../common/error-handle/http-exception.filter';
import { OwnErrorFilter } from '../../common/error-handle/own-error.filter';
import { PrefixController } from '../base/base.routes';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentService } from './student.service';
// import { PaginationBaseDto } from '../base/dto/pagination-base.dto';

@ApiTags('Student')
@PrefixController('student')
@UseFilters(new HttpExceptionFilter(), new OwnErrorFilter())
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @ApiCreatedResponse({
    // type: {
    //   // success: Boolean,
    //   // data: CreateStudentDto,
    // },
  })
  @Post()
  // @UseFilters(new HttpExceptionFilter())
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @ApiOkResponse({
    type: Array<CreateStudentDto>,
    isArray: true,
    description: 'Get list user',
  })
  // @ApiQuery({ name: 'name', required: false })
  @Get()
  findAll() // @Query('name') name?: string, // @Query() pagination?: PaginationBaseDto,
  {
    return this.studentService.findAll();
  }

  @ApiNotFoundResponse()
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
