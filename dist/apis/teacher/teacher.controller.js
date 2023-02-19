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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const Method = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const create_teacher_dto_1 = require("./dto/create-teacher.dto");
const update_teacher_dto_1 = require("./dto/update-teacher.dto");
const swagger_1 = require("@nestjs/swagger");
const base_routes_1 = require("../base/base.routes");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const role_enum_1 = require("../../auth/entities/role.enum");
const roles_decorator_1 = require("../../auth/roles.decorator");
const roles_guard_1 = require("../../auth/roles.guard");
const _req_login_teacher_dto_1 = require("./dto/_req.login-teacher.dto");
let TeacherController = class TeacherController {
    constructor(userService) {
        this.userService = userService;
    }
    registerTeacher(createTeacherDto) {
        return this.userService.registerTeacher(createTeacherDto);
    }
    login(loginTeacher) {
        return this.userService.loginTeacher(loginTeacher);
    }
    logoutTeacher() {
    }
    getTeacherDetails(req) {
        return this.userService.getTeacherDetails(req.user);
    }
    forgotPassword(id, updateTeacherDto) {
    }
    resetPassword(id, updateTeacherDto) {
    }
    updatePassword(id, updateTeacherDto) {
    }
    updateProfile(id, updateTeacherDto) {
    }
    getAllTeachers() {
        return this.userService.getAllTeachers();
    }
    getSingleTeacher(id) {
    }
    updateTeacherRole(id) {
    }
    deleteTeacher(id) {
    }
};
__decorate([
    Method.Post('/register'),
    Method.UseInterceptors((0, platform_express_1.FileInterceptor)('image')),
    __param(0, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "registerTeacher", null);
__decorate([
    Method.Post('/login'),
    __param(0, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_req_login_teacher_dto_1.RequestLoginTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "login", null);
__decorate([
    Method.Get('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "logoutTeacher", null);
__decorate([
    Method.Get('/me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Method.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], TeacherController.prototype, "getTeacherDetails", null);
__decorate([
    Method.Post('/password/forgot'),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "forgotPassword", null);
__decorate([
    Method.Put('/password/reset/:token'),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "resetPassword", null);
__decorate([
    Method.Put('/password/update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updatePassword", null);
__decorate([
    Method.Put('/me/update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teacher_dto_1.UpdateTeacherDto]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateProfile", null);
__decorate([
    Method.Get('/list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getAllTeachers", null);
__decorate([
    Method.Get('/admin/user/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getSingleTeacher", null);
__decorate([
    Method.Put('/admin/user/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateTeacherRole", null);
__decorate([
    Method.Delete('/admin/user/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "deleteTeacher", null);
TeacherController = __decorate([
    (0, swagger_1.ApiTags)('Teacher'),
    (0, base_routes_1.PrefixController)('teacher'),
    (0, swagger_1.ApiSecurity)('basic'),
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map