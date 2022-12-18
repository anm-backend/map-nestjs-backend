import { Module } from '@nestjs/common';
import { SchoolModule } from './school/school.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [SchoolModule, TeacherModule, StudentModule],
  exports: [SchoolModule, TeacherModule, StudentModule],
})
export class ApisModule {}
