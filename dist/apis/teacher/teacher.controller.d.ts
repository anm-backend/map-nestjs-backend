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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { SendToken } from 'src/utils/sendToken';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
export declare class TeacherController {
    private readonly userService;
    constructor(userService: TeacherService);
    registerTeacher(image: Express.Multer.File, createTeacherDto: CreateTeacherDto): Promise<SendToken>;
    login(loginTeacher: RequestLoginTeacherDto): Promise<SendToken>;
    logoutTeacher(): void;
    getTeacherDetails(req: any): any;
    forgotPassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    resetPassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    updatePassword(id: string, updateTeacherDto: UpdateTeacherDto): void;
    updateProfile(id: string, updateTeacherDto: UpdateTeacherDto): void;
    getAllTeachers(): Promise<{
        success: boolean;
        users: (import("./schemas/teacher.schema").Teacher & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getSingleTeacher(id: string): void;
    updateTeacherRole(id: string): void;
    deleteTeacher(id: string): void;
}
