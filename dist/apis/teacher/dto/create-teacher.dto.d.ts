import { Avatar } from '../schemas/teacher.schema';
export declare class CreateTeacherDto {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    gender: string;
    userId: string;
    password: string;
    avatar?: Avatar;
    role: string;
    comparePassword: Function;
}
