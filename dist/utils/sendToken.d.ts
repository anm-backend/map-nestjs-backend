import { Teacher } from 'src/apis/teacher/schemas/teacher.schema';
export interface SendToken {
    success: boolean;
    user: Teacher;
    token: string;
}
export declare const sendToken: (user: Teacher) => SendToken;
