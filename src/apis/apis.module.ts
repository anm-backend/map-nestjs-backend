import { Module } from '@nestjs/common';
import { SchoolModule } from './school/school.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { GatewayModule } from './socket/socket.module';

@Module({
  imports: [SchoolModule, TeacherModule, StudentModule, GatewayModule],
  exports: [SchoolModule, TeacherModule, StudentModule, GatewayModule],
})
export class ApisModule {}
