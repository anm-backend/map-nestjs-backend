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
const generate_user_response_1 = require("../../auth/jwt/generate/generate.user.response");
const configuration_1 = require("../../config/configuration");
const cloudinary_service_1 = require("../../uploads/cloudinary/cloudinary.service");
const base_service_1 = require("../base/base.service");
let TeacherService = class TeacherService extends base_service_1.BaseService {
    constructor(teacherModel, cloudinaryService) {
        super(teacherModel);
        this.teacherModel = teacherModel;
        this.cloudinaryService = cloudinaryService;
    }
    async register(requestRegisterTeacherDto) {
        try {
            const { firstName, lastName, email, userId, gender, password, phone } = requestRegisterTeacherDto;
            const user = await this.model.create({
                firstName,
                lastName,
                email,
                gender,
                password,
                userId,
                phone,
            });
            return (0, generate_user_response_1.infoResult)(user);
        }
        catch (error) {
            throw new common_1.UnauthorizedException([error]);
        }
    }
    async login(loginTeacher) {
        const { userId, password } = loginTeacher;
        const user = await this.model.findOne({ userId }).select([]);
        if (!user)
            throw new common_1.UnauthorizedException(['Tài khoản không tồn tại']);
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched)
            throw new common_1.UnauthorizedException(['Sai mật khẩu']);
        return (0, generate_user_response_1.infoResult)(user);
    }
    async logoutTeacher() {
        return {
            success: true,
            message: 'Logged Out',
        };
    }
    async getAll(paginationBaseDto, search) {
        const { page, limit } = paginationBaseDto;
        try {
            const searchData = JSON.parse(search.trim().length === 0 ? '{}' : search);
            const datas = await this.model
                .find(searchData)
                .skip((page - 1) * limit)
                .limit(limit)
                .select(['-password']);
            const numberOfPages = Math.ceil((await this.model.countDocuments()) / limit);
            return {
                success: true,
                page,
                numberOfPages,
                datas,
            };
        }
        catch (_a) {
            throw new common_1.BadRequestException(['Dữ liệu tìm kiếm sai định dạng']);
        }
    }
    async getDetailById(id) {
        const data = await this.model.findById(id).select(['-password']);
        if (!data)
            throw new common_1.NotFoundException([`Giáo viên không tồn tại`]);
        return {
            success: true,
            data,
        };
    }
    async deleteById(id) {
        const data = await this.model.findById(id).select(['-password']);
        if (!data)
            throw new common_1.NotFoundException([`Giáo viên không tồn tại`]);
        await data.remove();
        return {
            success: true,
            data,
        };
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