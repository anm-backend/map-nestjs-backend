"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicTransaction = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("../config/configuration");
const PublicTransaction = () => (0, common_1.SetMetadata)(configuration_1.isPublicKey, true);
exports.PublicTransaction = PublicTransaction;
//# sourceMappingURL=public.transaction.js.map