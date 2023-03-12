import { Model } from 'mongoose';
import { CloudinaryService } from '../../uploads/cloudinary/cloudinary.service';
import { BaseService } from '../base/base.service';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { RequestRegisterTeacherDto } from './dto/_req.register-teacher.dto';
import { ResponseListTeacherDto } from './dto/_res.list-teacher.dto';
import { PaginationBaseDto } from '../base/dto/pagination-base.dto';
export declare class TeacherService extends BaseService<Teacher, CreateTeacherDto | UpdateTeacherDto> {
    private teacherModel;
    private cloudinaryService;
    constructor(teacherModel: Model<Teacher, {}>, cloudinaryService: CloudinaryService);
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
    logoutTeacher(): Promise<{
        success: boolean;
        message: string;
    }>;
    getAll(paginationBaseDto: PaginationBaseDto, search: string): Promise<ResponseListTeacherDto>;
    getDetailById(id: string): Promise<{
        success: boolean;
        data: Teacher;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
        data: Teacher;
    }>;
}
