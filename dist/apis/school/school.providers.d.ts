import { Connection } from 'mongoose';
export declare const schoolProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("./schemas/school.schema").School, {}, {}, {}, import("mongoose").Schema<import("./schemas/school.schema").School, import("mongoose").Model<import("./schemas/school.schema").School, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./schemas/school.schema").School>>;
    inject: string[];
}[];
