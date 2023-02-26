import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TeacherModule } from 'src/apis/teacher/teacher.module';
import { JwtAccessStrategy } from './jwt/jwtAccess.strategy';
// import { JwtRefreshStrategy } from './jwt/jwtRefresh.strategy';

@Global()
@Module({
  imports: [TeacherModule, JwtModule.register({})],
  providers: [
    JwtAccessStrategy,
    // JwtRefreshStrategy
  ],
})
export class AuthModule {}
