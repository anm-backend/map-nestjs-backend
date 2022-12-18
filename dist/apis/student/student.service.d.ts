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
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './schemas/student.schema';
import { BaseService } from '../base/base.service';
import { Model } from 'mongoose';
export declare class StudentService extends BaseService<Student, CreateStudentDto | UpdateStudentDto> {
    private studentModel;
    constructor(studentModel: Model<Student, {}>);
    create(createStudentDto: CreateStudentDto): Promise<{
        success: boolean;
        data: Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        data: (Student & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        success: boolean;
        data: Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        data: Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
