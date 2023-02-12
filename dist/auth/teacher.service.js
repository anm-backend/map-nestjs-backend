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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const cloudinary_service_1 = require("../uploads/cloudinary/cloudinary.service");
const configuration_1 = require("../config/configuration");
const sendToken_1 = require("../utils/sendToken");
const base_service_1 = require("../base/base.service");
let TeacherService = class TeacherService extends base_service_1.BaseService {
    constructor(teacherModel, cloudinaryService) {
        super(teacherModel);
        this.teacherModel = teacherModel;
        this.cloudinaryService = cloudinaryService;
    }
    async registerTeacher(image, createTeacherDto) {
        const { fullname, email, gender, password } = createTeacherDto;
        const user = await this.model.create({
            fullname: fullname,
            email,
            gender,
            password,
        });
        return (0, sendToken_1.sendToken)(user);
    }
    async loginTeacher(loginTeacher) {
        const { userId, password } = loginTeacher;
        if (!userId || !password)
            throw new common_1.HttpException('Please Enter Email And Password', common_1.HttpStatus.BAD_REQUEST);
        const user = await this.model.findOne({ userId }).select('+password');
        if (!user)
            throw new common_1.UnauthorizedException('Invalid Email or Password');
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched)
            throw new common_1.UnauthorizedException('Invalid Email or Password');
        return (0, sendToken_1.sendToken)(user);
    }
    async logoutTeacher() {
        return {
            success: true,
            message: 'Logged Out',
        };
    }
    async getTeacherDetails(user) {
        return {
            success: true,
            user,
        };
    }
    async getAllTeachers() {
        const users = await this.model.find();
        return {
            success: true,
            users,
        };
    }
    async findTeacherById(id) {
        return await this.model.findById(id);
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(configuration_1.schemaConfigs.TEACHER_MODEL.toString())),
    __metadata("design:paramtypes", [mongoose_1.Model,
        cloudinary_service_1.CloudinaryService])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map