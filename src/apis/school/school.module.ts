import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { schoolProviders } from './school.providers';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, ...schoolProviders],
})
export class SchoolModule {}
