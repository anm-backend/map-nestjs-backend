import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';
export declare class ControllerAuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly logger;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
