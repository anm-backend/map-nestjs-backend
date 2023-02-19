import { Global, Module } from '@nestjs/common';
import { JwtAccessStrategy } from './jwtAccess.strategy';
import { TeacherModule } from 'src/apis/teacher/teacher.module';
import { JwtRefreshStrategy } from './jwtRefresh.strategy';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [TeacherModule, JwtModule.register({})],
  providers: [JwtAccessStrategy, JwtRefreshStrategy],
})
export class AuthModule {}
