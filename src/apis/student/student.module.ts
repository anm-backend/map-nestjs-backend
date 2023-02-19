import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';

@Module({
  controllers: [StudentController],
  providers: [StudentService, ...studentProviders],
  exports: [StudentService],
})
export class StudentModule {}
