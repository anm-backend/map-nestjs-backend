"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnErrorFilter = exports.OwnError = void 0;
const common_1 = require("@nestjs/common");
class OwnError {
    constructor() {
        Error.apply(this, arguments);
    }
}
exports.OwnError = OwnError;
let OwnErrorFilter = class OwnErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.name == 'QueryFailedError' ? 400 : exception.getStatus();
        const errorResponse = {
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: exception.message,
        };
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            text: 'error msg',
            message: exception.message,
        });
    }
};
OwnErrorFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], OwnErrorFilter);
exports.OwnErrorFilter = OwnErrorFilter;
//# sourceMappingURL=own-error.filter.js.map