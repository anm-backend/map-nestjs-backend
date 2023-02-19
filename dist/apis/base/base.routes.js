"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixController = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
function PrefixController(path = '') {
    return (0, common_1.Controller)({
        path: path_1.posix.join('api', 'v1', path),
        version: '1',
    });
}
exports.PrefixController = PrefixController;
//# sourceMappingURL=base.routes.js.map