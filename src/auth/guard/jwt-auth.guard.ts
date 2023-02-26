import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import {
  authKey,
  // isPublicKey
} from '../../config/configuration';

@Injectable()
export class JwtAuthGuard extends AuthGuard(authKey) {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext): any {
    //   // token step 0
    //   // Add your custom authentication logic here
    //   // for example, call super.logIn(request) to establish a session.
    //   const isPublic = this.reflector.getAllAndOverride(isPublicKey, [
    //     context.getHandler(),
    //     context.getClass(),
    //   ]);
    //   if (isPublic) return true; // for pass all

    return super.canActivate(context);

    //   return false; // for throw exception all
  }

  handleRequest(err, user, info: Error) {
    // token step 2
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      // throw err || new UnauthorizedException();
      throw new UnauthorizedException(['Chưa đăng nhập']);
    }
    //   // don't throw 401 error when unauthenticated
    return user;
  }
}
