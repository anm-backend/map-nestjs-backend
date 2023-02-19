import { Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private userService;
    constructor(userService: TeacherService);
    validate(payload: any): Promise<import("../apis/teacher/schemas/teacher.schema").Teacher & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export {};
