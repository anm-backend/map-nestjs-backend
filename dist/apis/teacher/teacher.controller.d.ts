import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
export declare class TeacherController {
    private readonly userService;
    constructor(userService: TeacherService);
    register(createTeacherDto: CreateTeacherDto): Promise<{
        success: boolean;
        user: {
            _id: any;
            firstName: string;
            lastName: string;
            gender: string;
            userId: string;
            role: string;
        };
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginTeacher: RequestLoginTeacherDto): Promise<{
        success: boolean;
        user: {
            _id: any;
            firstName: string;
            lastName: string;
            gender: string;
            userId: string;
            role: string;
        };
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    getProfile(req: any): any;
    updateProfile(id: string, updateTeacherDto: UpdateTeacherDto): void;
    getAll(): Promise<{
        success: boolean;
        datas: import("./schemas/teacher.schema").Teacher[];
    }>;
}
