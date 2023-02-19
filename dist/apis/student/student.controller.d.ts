import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentService } from './student.service';
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
