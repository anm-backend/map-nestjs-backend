import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { TeacherModule } from 'src/apis/teacher/teacher.module';

@Module({
  imports: [TeacherModule],
  providers: [JwtStrategy],
})
export class AuthModule {}
