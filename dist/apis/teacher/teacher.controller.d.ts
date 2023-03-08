import { TeacherService } from './teacher.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
import { RequestRegisterTeacherDto } from './dto/_req.register-teacher.dto';
import { ResponseListTeacherDto } from './dto/_res.list-teacher.dto';
export declare class TeacherController {
    private readonly userService;
    constructor(userService: TeacherService);
    register(requestRegisterTeacherDto: RequestRegisterTeacherDto): Promise<{
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
    getAll(page?: number, limit?: number, search?: string): Promise<ResponseListTeacherDto>;
}
