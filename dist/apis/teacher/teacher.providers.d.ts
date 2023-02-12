import { Connection } from 'mongoose';
import { Teacher } from './schemas/teacher.schema';
export declare const teacherProviders: {
    provide: string;
    useFactory(connection: Connection): import("mongoose").Model<Teacher, {}, {}, {}, import("mongoose").Schema<Teacher, import("mongoose").Model<Teacher, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Teacher>>;
    inject: string[];
}[];
