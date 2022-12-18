/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { SendToken } from 'src/utils/sendToken';
import { BaseService } from '../base/base.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
export declare class TeacherService extends BaseService<Teacher, CreateTeacherDto | UpdateTeacherDto> {
    private teacherModel;
    private cloudinaryService;
    constructor(teacherModel: Model<Teacher, {}>, cloudinaryService: CloudinaryService);
    registerTeacher(image: Express.Multer.File, createTeacherDto: CreateTeacherDto): Promise<SendToken>;
    loginTeacher(email: string, password: string): Promise<SendToken>;
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