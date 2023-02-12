import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { DatabaseModule } from 'src/database/database.module';
import { schoolProviders } from './school.providers';
import { CloudinaryModule } from 'src/uploads/cloudinary/cloudinary.module';

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  controllers: [SchoolController],
  providers: [SchoolService, ...schoolProviders],
})
export class SchoolModule {}
