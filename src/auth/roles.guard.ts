import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // const roles = this.reflector.get<string[]>(
    // const requiredRoles = this.reflector.get<string[]>(
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      //   'roles',
      //   context.getHandler(),
      context.getHandler(),
      context.getClass(),
    ]);

    // if (!roles)
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // const user: Teacher = {
    //   name: 'John Doe',
    //   roles: [Role.USER],
    // };

    // return user && user.roles.includes(context.getArgByIndex(0));
    // console.log(context.getArgByIndex(0));
    // return true

    const isAccess = requiredRoles.some((roles) => user.data.role.includes(roles));

    if (!isAccess) {
      throw new UnauthorizedException(['Không có quyền truy cập']);
    }
    return isAccess;
  }
}
