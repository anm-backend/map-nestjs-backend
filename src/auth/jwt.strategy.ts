import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: TeacherService) {
    super({
      ignoreExpiration: false,
      secretOrKey: 'WFFWf15115U842UGUBWF81EE858UYBY51BGBJ5E51Q',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const { token } = request?.cookies;
          if (!token) throw new UnauthorizedException("You are not login");

          return token;
        },
      ]),
    });
  }

  async validate(payload: any) {
    if (!payload) throw new UnauthorizedException();
    return this.userService.findTeacherById(payload.id);
  }
}
