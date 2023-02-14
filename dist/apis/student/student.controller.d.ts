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
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, import("./schemas/student.schema").Student> & import("./schemas/student.schema").Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: import("./schemas/student.schema").Student[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        count?: undefined;
        data?: undefined;
    }>;
    findOne(_id: string): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, import("./schemas/student.schema").Student> & import("./schemas/student.schema").Student & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(_id: string, updateStudentDto: UpdateStudentDto): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, import("./schemas/student.schema").Student> & import("./schemas/student.schema").Student & {
            _id: import("mongoose").Types.ObjectId;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    remove(_id: string): Promise<{
        success: boolean;
        data: import("mongoose").Document<unknown, any, import("./schemas/student.schema").Student> & import("./schemas/student.schema").Student & {
            _id: import("mongoose").Types.ObjectId;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
}
