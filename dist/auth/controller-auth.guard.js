"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ControllerAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("./jwt/jwt.service");
let ControllerAuthGuard = ControllerAuthGuard_1 = class ControllerAuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(ControllerAuthGuard_1.name);
    }
    canActivate(context) {
        const getRequest = context.switchToHttp().getRequest();
        this.logger.debug(`Checking for auth token on request body`, getRequest.body);
        const { accessToken } = getRequest.body;
        try {
            const payload = this.jwtService.verify(accessToken);
            getRequest.userID = payload.sub;
            getRequest.pollID = payload.pollID;
            getRequest.name = payload.name;
            return true;
        }
        catch (_a) {
        }
    }
};
ControllerAuthGuard = ControllerAuthGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.JwtService])
], ControllerAuthGuard);
exports.ControllerAuthGuard = ControllerAuthGuard;
//# sourceMappingURL=controller-auth.guard.js.map