"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfigs = exports.schemaConfigs = void 0;
function default_1() {
    return {
        port: parseInt(process.env.PORT, 10) || 3000,
        socketPort: parseInt(process.env.SOCKET_PORT, 10) ||
            parseInt(process.env.PORT, 10) ||
            3000,
        database: {
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        },
        mongouri: process.env.MONGO_URI,
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
    };
}
exports.default = default_1;
var schemaConfigs;
(function (schemaConfigs) {
    schemaConfigs[schemaConfigs["STUDENT_MODEL"] = 0] = "STUDENT_MODEL";
    schemaConfigs[schemaConfigs["SCHOOL_MODEL"] = 1] = "SCHOOL_MODEL";
    schemaConfigs[schemaConfigs["TEACHER_MODEL"] = 2] = "TEACHER_MODEL";
})(schemaConfigs = exports.schemaConfigs || (exports.schemaConfigs = {}));
exports.dbConfigs = 'DATABASE_CONNECTION';
//# sourceMappingURL=configuration.js.map