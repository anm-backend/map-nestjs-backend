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
exports.RequestLoginTeacherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_base_dto_1 = require("../../base/dto/create-base.dto");
class RequestLoginTeacherDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Mã giáo viên'),
    __metadata("design:type", String)
], RequestLoginTeacherDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Mật khẩu'),
    __metadata("design:type", String)
], RequestLoginTeacherDto.prototype, "password", void 0);
exports.RequestLoginTeacherDto = RequestLoginTeacherDto;
//# sourceMappingURL=_req.login-teacher.dto.js.map