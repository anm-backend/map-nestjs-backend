"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentProviders = void 0;
const configuration_1 = require("../../config/configuration");
const student_schema_1 = require("./schemas/student.schema");
exports.studentProviders = [
    {
        provide: configuration_1.schemaConfigs.STUDENT_MODEL.toString(),
        useFactory(connection) {
            return connection.model('Student', student_schema_1.StudentSchema);
        },
        inject: [configuration_1.dbConfigs],
    },
];
//# sourceMappingURL=student.providers.js.map