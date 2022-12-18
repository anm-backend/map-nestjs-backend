import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Teacher } from 'src/apis/teacher/schemas/teacher.schema';
import { Role } from './entities/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  // constructor(private reflector: Reflector) {}

  // canActivate(context: ExecutionContext): boolean {
  //   const roles = this.reflector.get<string[]>('roles', context.getHandler());
  //   if (!roles) {
  //     return true;
  //   }
  //   const request = context.switchToHttp().getRequest();
  //   const user = request.user;
  //   console.log(user);
  //   return true;
  // }

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // const requiredRoles = this.reflector.get<string[]>(
    //   'roles',
    //   context.getHandler(),
    // );
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;
    const request = context.switchToHttp().getRequest();
    const user: Teacher = request.user;
    // const user: Teacher = {
    //   name: 'John Doe',
    //   roles: [Role.USER],
    // };

    // return user && user.roles.includes(context.getArgByIndex(0));
    // console.log(context.getArgByIndex(0));
    // return true
    return requiredRoles.some((roles) => user.role.includes(roles));
  }
}
