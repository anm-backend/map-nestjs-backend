/// <reference types="multer" />
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { QueryParam } from 'src/utils/searchFeatures';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getAllSchools(query: QueryParam): Promise<{
        success: boolean;
        datas: any;
        schoolsCount: number;
        limit: number;
        filteredSchoolsCount: any;
    }>;
    getSchools(): Promise<{
        success: boolean;
        schools: (import("mongoose").Document<unknown, any, import("./schemas/school.schema").School> & import("./schemas/school.schema").School & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getSchoolDetails(id: string): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, import("./schemas/school.schema").School> & import("./schemas/school.schema").School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAdminSchools(): Promise<{
        success: boolean;
        schools: (import("mongoose").Document<unknown, any, import("./schemas/school.schema").School> & import("./schemas/school.schema").School & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createSchool(images: Array<Express.Multer.File>, createSchoolDto: CreateSchoolDto): string;
    updateSchool(id: string, updateSchoolDto: UpdateSchoolDto): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, import("./schemas/school.schema").School> & import("./schemas/school.schema").School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteSchool(id: string): Promise<{
        success: boolean;
    }>;
    createSchoolReview(id: string, updateSchoolDto: UpdateSchoolDto): Promise<{
        success: boolean;
    }>;
    getSchoolReviews(id: string, updateSchoolDto: UpdateSchoolDto): Promise<{
        success: boolean;
    }>;
    deleteReview(id: string, updateSchoolDto: UpdateSchoolDto): Promise<{
        success: boolean;
    }>;
}
