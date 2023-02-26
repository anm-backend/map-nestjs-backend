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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAccessStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const teacher_service_1 = require("../../apis/teacher/teacher.service");
const configuration_1 = require("../../config/configuration");
let JwtAccessStrategy = class JwtAccessStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, configuration_1.authKey) {
    constructor(teacherService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: (0, configuration_1.default)().jwt.secret,
        });
        this.teacherService = teacherService;
    }
    async validate(payload) {
        return this.teacherService.getDetailById(payload.id);
    }
};
JwtAccessStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], JwtAccessStrategy);
exports.JwtAccessStrategy = JwtAccessStrategy;
//# sourceMappingURL=jwtAccess.strategy.js.map