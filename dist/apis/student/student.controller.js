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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("../../common/error-handle/http-exception.filter");
const own_error_filter_1 = require("../../common/error-handle/own-error.filter");
const base_routes_1 = require("../base/base.routes");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    create(createStudentDto) {
        return this.studentService.create(createStudentDto);
    }
    findAll() {
        return this.studentService.findAll();
    }
    findOne(_id) {
        return this.studentService.findOne(_id);
    }
    update(_id, updateStudentDto) {
        return this.studentService.update(_id, updateStudentDto);
    }
    remove(_id) {
        return this.studentService.remove(_id);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)({}),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: (Array),
        isArray: true,
        description: 'Get list user',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "remove", null);
StudentController = __decorate([
    (0, swagger_1.ApiTags)('Student'),
    (0, base_routes_1.PrefixController)('student'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter(), new own_error_filter_1.OwnErrorFilter()),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map