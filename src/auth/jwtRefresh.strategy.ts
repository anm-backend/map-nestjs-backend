import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
import { Request } from 'express';
import configuration from '../config/configuration';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: TeacherService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configuration().jwt.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    return { ...payload, refreshToken };
  }
}
