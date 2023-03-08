import { CreateTeacherDto } from './create-teacher.dto';
export declare class ResponseListTeacherDto {
    success: boolean;
    page: number;
    numberOfPages: number;
    datas: CreateTeacherDto[];
}
