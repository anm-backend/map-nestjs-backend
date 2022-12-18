"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolProviders = void 0;
const configuration_1 = require("../../config/configuration");
const school_schema_1 = require("./schemas/school.schema");
exports.schoolProviders = [
    {
        provide: configuration_1.schemaConfigs.SCHOOL_MODEL.toString(),
        useFactory: (connection) => connection.model('School', school_schema_1.SchoolSchema),
        inject: [configuration_1.dbConfigs],
    },
];
//# sourceMappingURL=school.providers.js.map