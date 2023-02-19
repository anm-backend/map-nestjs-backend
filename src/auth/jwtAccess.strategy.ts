import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
import configuration from '../config/configuration';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: TeacherService) {
    super({
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
    // token step 2
    return payload;
    // req.user = payload;
    // if (!payload) throw new UnauthorizedException();
    // return this.userService.findTeacherById(payload.id);
  }
}
