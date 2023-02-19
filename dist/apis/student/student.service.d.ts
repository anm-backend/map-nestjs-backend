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
        data: import("mongoose").Document<unknown, any, Student> & Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: Student[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        count?: undefined;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, Student> & Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, Student> & Student & {
            _id: import("mongoose").Types.ObjectId;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, Student> & Student & {
            _id: import("mongoose").Types.ObjectId;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
}
