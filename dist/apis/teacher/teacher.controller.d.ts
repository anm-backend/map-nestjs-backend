import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
export declare class TeacherController {
    private readonly userService;
    constructor(userService: TeacherService);
    registerTeacher(createTeacherDto: CreateTeacherDto): Promise<void>;
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
        token: string;
    }>;
    logoutTeacher(): void;
    getTeacherDetails(req: any): any;
    forgotPassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    resetPassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    updatePassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    updateProfile(id: string, updateTeacherDto: UpdateTeacherDto): void;
    getAllTeachers(): Promise<{
        success: boolean;
        datas: (import("./schemas/teacher.schema").Teacher & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getSingleTeacher(id: string): void;
    updateTeacherRole(id: string): void;
    deleteTeacher(id: string): void;
}
