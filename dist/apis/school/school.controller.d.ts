import { SchoolService } from './school.service';
import { QueryParam } from '../../utils/searchFeatures';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getAll(query: QueryParam): Promise<{
        success: boolean;
        datas: any;
        schoolsCount: number;
        limit: number;
        filteredSchoolsCount: any;
    }>;
    getDetailById(id: string): Promise<{
        success: boolean;
        school: import("mongoose").Document<unknown, any, import("./schemas/school.schema").School> & import("./schemas/school.schema").School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
