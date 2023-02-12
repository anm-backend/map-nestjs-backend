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
exports.CreateTeacherDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const teacher_schema_1 = require("../schemas/teacher.schema");
const create_base_dto_1 = require("../../base/dto/create-base.dto");
class CreateTeacherDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Họ'),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Tên'),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Giới tính'),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Mã giáo viên'),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, create_base_dto_1.IsNotEmptyF)('Mật khẩu'),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", teacher_schema_1.Avatar)
], CreateTeacherDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTeacherDto.prototype, "role", void 0);
exports.CreateTeacherDto = CreateTeacherDto;
//# sourceMappingURL=create-teacher.dto.js.map