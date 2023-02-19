import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { teacherProviders } from './teacher.providers';
// import { DatabaseModule } from 'src/database/database.module';
// import { CloudinaryModule } from 'src/uploads/cloudinary/cloudinary.module';

@Module({
  // imports: [DatabaseModule, CloudinaryModule],
  controllers: [TeacherController],
  providers: [TeacherService, ...teacherProviders],
  exports: [TeacherService],
})
export class TeacherModule {}
