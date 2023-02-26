import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
import configuration, { authKey } from '../../config/configuration';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, authKey) {
  constructor(private teacherService: TeacherService) {
    super({
      // token step 0
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: ExtractJwt.fromExtractors([
      // (request: Request) => {
      //   return "";
      // const cookies = request?.cookies;
      // if (!cookies || !cookies.token)
      //   throw new UnauthorizedException('Bạn chưa đăng nhập');

      // return cookies.token;
      //   },
      // ]),
      // ignoreExpiration: false,
      secretOrKey: configuration().jwt.secret,
    });
  }

  async validate(payload: any) {
    // token step 1
    // return payload;
    // req.user = payload;
    return this.teacherService.getDetailById(payload.id);
  }
}
