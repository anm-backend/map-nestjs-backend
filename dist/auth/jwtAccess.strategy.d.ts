import { Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
declare const JwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    private userService;
    constructor(userService: TeacherService);
    validate(payload: any): Promise<any>;
}
export {};
