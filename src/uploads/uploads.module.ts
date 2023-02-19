import { Global, Module } from '@nestjs/common';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Global()
@Module({
  imports: [CloudinaryModule],
  exports: [CloudinaryModule],
})
export class UploadsModule {}
