import { Student } from '../schemas/student.schema';
export declare class CreateStudentDto implements Student {
    identityCode: string;
    name: string;
    classStudy: string;
}
