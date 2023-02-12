/// <reference types="multer" />
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/uploads/cloudinary/cloudinary.service';
import { SendToken } from 'src/utils/sendToken';
import { BaseService } from '../base/base.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
export declare class TeacherService extends BaseService<Teacher, CreateTeacherDto | UpdateTeacherDto> {
    private teacherModel;
    private cloudinaryService;
    constructor(teacherModel: Model<Teacher, {}>, cloudinaryService: CloudinaryService);
    registerTeacher(image: Express.Multer.File, createTeacherDto: CreateTeacherDto): Promise<SendToken>;
    loginTeacher(loginTeacher: RequestLoginTeacherDto): Promise<SendToken>;
    logoutTeacher(): Promise<{
        success: boolean;
        message: string;
    }>;
    getTeacherDetails(user: any): Promise<any>;
    getAllTeachers(): Promise<{
        success: boolean;
        users: (Teacher & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findTeacherById(id: string): Promise<Teacher & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
