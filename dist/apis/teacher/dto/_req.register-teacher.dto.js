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
exports.RequestRegisterTeacherDto = exports.UserRole = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Moderator"] = "Moderator";
    UserRole["User"] = "User";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
class RequestRegisterTeacherDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Họ giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tên giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['Admin', 'Moderator', 'User'] }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Giới tính giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Số điện thoại giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Mã giáo viên không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Mật khẩu không được bỏ trống' }),
    __metadata("design:type", String)
], RequestRegisterTeacherDto.prototype, "password", void 0);
exports.RequestRegisterTeacherDto = RequestRegisterTeacherDto;
//# sourceMappingURL=_req.register-teacher.dto.js.map