"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const configuration_1 = require("../config/configuration");
exports.databaseProviders = [
    {
        provide: configuration_1.dbConfigs,
        useFactory: () => {
            mongoose.set('strictQuery', true);
            return mongoose.connect((0, configuration_1.default)().mongouri);
        },
    },
];
//# sourceMappingURL=database.providers.js.map