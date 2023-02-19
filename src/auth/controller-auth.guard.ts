import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from './jwt/jwt.service';

@Injectable()
export class ControllerAuthGuard implements CanActivate {
  private readonly logger = new Logger(ControllerAuthGuard.name);
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const getRequest = context.switchToHttp().getRequest();

    this.logger.debug(
      `Checking for auth token on request body`,
      getRequest.body,
    );

    const { accessToken } = getRequest.body;
    try {
      const payload = this.jwtService.verify(accessToken);

      getRequest.userID = payload.sub;
      getRequest.pollID = payload.pollID;
      getRequest.name = payload.name;

      return true;
    } catch {
      // throw new ForbiddenException('Invalid authorization token');
    }
    // throw new Error('Method not implemented.');
  }
}
