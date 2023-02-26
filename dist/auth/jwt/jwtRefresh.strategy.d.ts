import { Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
import { Request } from 'express';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private userService;
    constructor(userService: TeacherService);
    validate(req: Request, payload: any): Promise<any>;
}
export {};
