declare const _default: () => {
    port: number;
    nodeEnv: string;
    database: {
        host: string;
        port: number;
    };
    mongouri: string;
    jwt: {
        expire: {
            access: string;
            refresh: string;
        };
        secret: string;
    };
    cloudinary: {
        name: string;
        apiKey: string;
        apiSecret: string;
    };
    socketPort: number;
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
    email: {
        sendgrid_reset_templateid: string;
    };
};
export default _default;
export declare const authKey: string;
export declare const isPublicKey = "publicKey";
export declare enum schemaConfigs {
    STUDENT_MODEL = 0,
    SCHOOL_MODEL = 1,
    TEACHER_MODEL = 2
}
export declare const dbConfigs = "DATABASE_CONNECTION";
