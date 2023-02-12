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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../base/base.service");
const configuration_1 = require("../../config/configuration");
const mongoose_1 = require("mongoose");
let StudentService = class StudentService extends base_service_1.BaseService {
    constructor(studentModel) {
        super(studentModel);
        this.studentModel = studentModel;
    }
    async create(createStudentDto) {
        try {
            const data = await this.model.create(createStudentDto);
            return {
                success: true,
                data,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        const page = 1;
        const limit = 10;
        try {
            const data = await this.model
                .find()
                .limit(limit)
                .skip((page - 1) * limit);
            return {
                success: true,
                count: data.length,
                data,
            };
        }
        catch (error) {
            return {
                success: false,
                error,
            };
        }
    }
    async findOne(id) {
        try {
            const data = await this.model.findById(id);
            return {
                success: true,
                data,
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async update(id, updateStudentDto) {
        try {
            const data = await this.model.findByIdAndUpdate(id, updateStudentDto);
            return {
                success: true,
                data,
            };
        }
        catch (error) {
            return {
                success: false,
                error,
            };
        }
    }
    async remove(id) {
        try {
            const data = await this.model.findByIdAndDelete(id);
            return {
                success: true,
                data,
            };
        }
        catch (error) {
            return {
                success: false,
                error,
            };
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(configuration_1.schemaConfigs.STUDENT_MODEL.toString())),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map