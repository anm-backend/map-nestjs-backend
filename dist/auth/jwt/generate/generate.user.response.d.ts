import { Teacher } from '../../../apis/teacher/schemas/teacher.schema';
export declare const infoResult: (user: Teacher) => {
    success: boolean;
    user: {
        _id: any;
        firstName: string;
        lastName: string;
        gender: string;
        userId: string;
        role: string;
    };
    token: string;
};
