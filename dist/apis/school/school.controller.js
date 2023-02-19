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
exports.SchoolController = void 0;
const Method = require("@nestjs/common");
const school_service_1 = require("./school.service");
const create_school_dto_1 = require("./dto/create-school.dto");
const update_school_dto_1 = require("./dto/update-school.dto");
const swagger_1 = require("@nestjs/swagger");
const searchFeatures_1 = require("../../utils/searchFeatures");
const base_routes_1 = require("../base/base.routes");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const role_enum_1 = require("../../auth/entities/role.enum");
const roles_decorator_1 = require("../../auth/roles.decorator");
const roles_guard_1 = require("../../auth/roles.guard");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    getAllSchools(query) {
        return this.schoolService.getAllSchools(query);
    }
    getSchools() {
        return this.schoolService.getSchools();
    }
    getSchoolDetails(id) {
        return this.schoolService.getSchoolDetails((id = id));
    }
    getAdminSchools() {
        return this.schoolService.getAdminSchools();
    }
    createSchool(images, createSchoolDto) {
        console.log({
            images,
            createSchoolDto: Object.assign(Object.assign({}, createSchoolDto), { specificationsJson: JSON.parse(createSchoolDto.specifications.toString())[0] }),
        });
        return '1';
    }
    updateSchool(id, updateSchoolDto) {
        return this.schoolService.updateSchool(id, updateSchoolDto);
    }
    deleteSchool(id) {
        return this.schoolService.deleteSchool(id);
    }
    createSchoolReview(id, updateSchoolDto) {
        return this.schoolService.createSchoolReview();
    }
    getSchoolReviews(id, updateSchoolDto) {
        return this.schoolService.getSchoolReviews(id);
    }
    deleteReview(id, updateSchoolDto) {
        return this.schoolService.deleteReview();
    }
};
__decorate([
    Method.Get(),
    __param(0, Method.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchFeatures_1.QueryParam]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getAllSchools", null);
__decorate([
    Method.Get('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getSchools", null);
__decorate([
    Method.Get('/:id'),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getSchoolDetails", null);
__decorate([
    Method.Get('/admin/schools'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getAdminSchools", null);
__decorate([
    Method.Post('/admin/school/new'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        create_school_dto_1.CreateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "createSchool", null);
__decorate([
    Method.Put('/admin/school/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "updateSchool", null);
__decorate([
    Method.Delete('/admin/school/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "deleteSchool", null);
__decorate([
    Method.Put('/review'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "createSchoolReview", null);
__decorate([
    Method.Get('/admin/reviews'),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getSchoolReviews", null);
__decorate([
    Method.Delete('/admin/reviews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, Method.Param('id')),
    __param(1, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_school_dto_1.UpdateSchoolDto]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "deleteReview", null);
SchoolController = __decorate([
    (0, swagger_1.ApiTags)('School'),
    (0, base_routes_1.PrefixController)('school'),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map