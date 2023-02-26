import { Strategy } from 'passport-jwt';
import { TeacherService } from 'src/apis/teacher/teacher.service';
declare const JwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    private teacherService;
    constructor(teacherService: TeacherService);
    validate(payload: any): Promise<{
        success: boolean;
        data: import("../../apis/teacher/schemas/teacher.schema").Teacher;
    }>;
}
export {};
