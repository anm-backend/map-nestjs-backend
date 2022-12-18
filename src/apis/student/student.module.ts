import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { DatabaseModule } from 'src/database/database.module';
import { studentProviders } from './student.providers';

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  controllers: [StudentController],
  providers: [StudentService, ...studentProviders],
  exports: [StudentService],
})
export class StudentModule {}
