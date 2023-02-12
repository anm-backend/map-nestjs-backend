export default function (): {
    port: number;
    nodeEnv: string;
    socketPort: number;
    database: {
        host: string;
        port: number;
    };
    mongouri: string;
    graphql: {
        playground: boolean;
        introspection: boolean;
    };
    apis: {
        users: {
            host: string;
            port: number;
        };
    };
};
export declare enum schemaConfigs {
    STUDENT_MODEL = 0,
    SCHOOL_MODEL = 1,
    TEACHER_MODEL = 2
}
export declare const dbConfigs = "DATABASE_CONNECTION";
