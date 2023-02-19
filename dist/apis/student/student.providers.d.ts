import { Connection } from 'mongoose';
export declare const studentProviders: {
    provide: string;
    useFactory(connection: Connection): import("mongoose").Model<import("./schemas/student.schema").Student, {}, {}, {}, import("mongoose").Schema<import("./schemas/student.schema").Student, import("mongoose").Model<import("./schemas/student.schema").Student, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./schemas/student.schema").Student>>;
    inject: string[];
}[];
