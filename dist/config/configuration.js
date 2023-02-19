"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigs = exports.schemaConfigs = void 0;
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    nodeEnv: process.env.NODE_ENV || 'DEVELOPEMENT' || 'PRODUCTION',
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    mongouri: process.env.MONGO_URI,
    jwt: {
        expire: process.env.JWT_EXPIRE,
        secret: process.env.JWT_SECRET,
    },
    cloudinary: {
        name: process.env.CLOUDINARY_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    socketPort: parseInt(process.env.SOCKET_PORT, 10) ||
        parseInt(process.env.PORT, 10) ||
        3000,
    graphql: {
        playground: process.env.GRAPHQL_PLAYGROUND === 'true',
        introspection: process.env.GRAPHQL_INTROSPECTION === 'true',
    },
    apis: {
        users: {
            host: process.env.USERS_API_HOST,
            port: parseInt(process.env.USERS_API_PORT, 10) || 3001,
        },
    },
    email: {
        sendgrid_reset_templateid: process.env.SENDGRID_RESET_TEMPLATEID,
    },
});
var schemaConfigs;
(function (schemaConfigs) {
    schemaConfigs[schemaConfigs["STUDENT_MODEL"] = 0] = "STUDENT_MODEL";
    schemaConfigs[schemaConfigs["SCHOOL_MODEL"] = 1] = "SCHOOL_MODEL";
    schemaConfigs[schemaConfigs["TEACHER_MODEL"] = 2] = "TEACHER_MODEL";
})(schemaConfigs = exports.schemaConfigs || (exports.schemaConfigs = {}));
exports.dbConfigs = 'DATABASE_CONNECTION';
//# sourceMappingURL=configuration.js.map