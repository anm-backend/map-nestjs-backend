import { Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: TeacherService);
    validate(payload: any): Promise<import("../apis/teacher/schemas/teacher.schema").Teacher & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export {};
