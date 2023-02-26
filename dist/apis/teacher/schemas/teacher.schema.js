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
exports.TeacherSchema = exports.Teacher = exports.Avatar = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_enum_1 = require("../../../auth/entities/role.enum");
class Avatar {
}
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Avatar.prototype, "public_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Avatar.prototype, "url", void 0);
exports.Avatar = Avatar;
let Teacher = class Teacher extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Teacher.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Teacher.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, unique: true }),
    __metadata("design:type", String)
], Teacher.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], Teacher.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, enum: ['Nam', 'Nữ', 'Khác'] }),
    __metadata("design:type", String)
], Teacher.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, unique: true }),
    __metadata("design:type", String)
], Teacher.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Teacher.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Avatar)
], Teacher.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: role_enum_1.Role, default: role_enum_1.Role.USER }),
    __metadata("design:type", String)
], Teacher.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Teacher.prototype, "refresh", void 0);
Teacher = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Teacher);
exports.Teacher = Teacher;
exports.TeacherSchema = mongoose_1.SchemaFactory.createForClass(Teacher);
//# sourceMappingURL=teacher.schema.js.map