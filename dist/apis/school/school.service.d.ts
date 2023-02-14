/// <reference types="multer" />
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
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/uploads/cloudinary/cloudinary.service';
import { QueryParam } from 'src/utils/searchFeatures';
import { BaseService } from '../base/base.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './schemas/school.schema';
export declare class SchoolService extends BaseService<School, CreateSchoolDto | UpdateSchoolDto> {
    private schoolModel;
    private cloudinaryService;
    constructor(schoolModel: Model<School, {}>, cloudinaryService: CloudinaryService);
    getAllSchools(query: QueryParam): Promise<{
        success: boolean;
        datas: any;
        schoolsCount: number;
        limit: number;
        filteredSchoolsCount: any;
    }>;
    getSchools(): Promise<{
        success: boolean;
        schools: (import("mongoose").Document<unknown, any, School> & School & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getSchoolDetails(id: string): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, School> & School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAdminSchools(): Promise<{
        success: boolean;
        schools: (import("mongoose").Document<unknown, any, School> & School & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    createSchool(createSchoolDto: CreateSchoolDto, image?: any, logo?: Express.Multer.File, brandname?: any, user?: any, specifications?: any): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, School> & School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateSchool(id: string, updateSchoolDto: UpdateSchoolDto, image?: any): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, School> & School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteSchool(id: string): Promise<{
        success: boolean;
    }>;
    createSchoolReview(): Promise<{
        success: boolean;
    }>;
    getSchoolReviews(id: string): Promise<{
        success: boolean;
    }>;
    deleteReview(): Promise<{
        success: boolean;
    }>;
}
