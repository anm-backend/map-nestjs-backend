import {
  Injectable,
  // UnauthorizedException
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
import { Request } from 'express';
import configuration, { authKey } from '../../config/configuration';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, authKey) {
  constructor(private userService: TeacherService) {
    super({
      // token step 1
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configuration().jwt.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    // token step 1
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    return { ...payload, refreshToken };
  }
}
