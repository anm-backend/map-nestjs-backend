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
const swagger_1 = require("@nestjs/swagger");
const searchFeatures_1 = require("../../utils/searchFeatures");
const base_routes_1 = require("../base/base.routes");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    getAll(query) {
        return this.schoolService.getAllSchools(query);
    }
    getDetailById(id) {
        return this.schoolService.getSchoolDetails((id = id));
    }
};
__decorate([
    Method.Get(),
    __param(0, Method.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchFeatures_1.QueryParam]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getAll", null);
__decorate([
    Method.Get('/:id'),
    __param(0, Method.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "getDetailById", null);
SchoolController = __decorate([
    (0, swagger_1.ApiTags)('School'),
    (0, base_routes_1.PrefixController)('school'),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map