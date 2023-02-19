import { Model } from 'mongoose';
import { CloudinaryService } from '../../uploads/cloudinary/cloudinary.service';
import { BaseService } from '../base/base.service';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
export declare class TeacherService extends BaseService<Teacher, CreateTeacherDto | UpdateTeacherDto> {
    private teacherModel;
    private cloudinaryService;
    constructor(teacherModel: Model<Teacher, {}>, cloudinaryService: CloudinaryService);
    registerTeacher(createTeacherDto: CreateTeacherDto): Promise<void>;
    loginTeacher(loginTeacher: RequestLoginTeacherDto): Promise<{
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
    logoutTeacher(): Promise<{
        success: boolean;
        message: string;
    }>;
    getTeacherDetails(user: any): Promise<any>;
    getAllTeachers(): Promise<{
        success: boolean;
        datas: (Teacher & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findTeacherById(id: string): Promise<Teacher & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
