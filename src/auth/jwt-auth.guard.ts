import {
  // ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // canActivate(context: ExecutionContext): any {
  // token step 1
  // Add your custom authentication logic here
  // for example, call super.logIn(request) to establish a session.
  //   return super.canActivate(context);
  // }

  handleRequest(err, user, info) {
    // token step 3
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      // throw err || new UnauthorizedException();
      throw new UnauthorizedException(['Chưa đăng nhập']);
    }
    return user;
  }

  // handleRequest(err, user, info: Error) {
  //   // don't throw 401 error when unauthenticated
  //   // console.log(user)
  //   return user;
  // }
}
