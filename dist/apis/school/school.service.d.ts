/// <reference types="multer" />
import { Model } from 'mongoose';
import { CloudinaryService } from '../../uploads/cloudinary/cloudinary.service';
import { QueryParam } from '../../utils/searchFeatures';
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
