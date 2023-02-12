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
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const cloudinary_service_1 = require("../../uploads/cloudinary/cloudinary.service");
const configuration_1 = require("../../config/configuration");
const errorHandler_1 = require("../../utils/errorHandler");
const base_service_1 = require("../base/base.service");
let SchoolService = class SchoolService extends base_service_1.BaseService {
    constructor(schoolModel, cloudinaryService) {
        super(schoolModel);
        this.schoolModel = schoolModel;
        this.cloudinaryService = cloudinaryService;
    }
    async getAllSchools(query) {
        const schoolsCount = await this.model.countDocuments();
        const queryData = this.model.find();
        const searchFeature = new this.SearchFeatures(queryData, query)
            .search()
            .filter();
        let datas = await searchFeature.queryData;
        let filteredSchoolsCount = datas.length;
        searchFeature.pagination(query.limit || 12);
        datas = await searchFeature.queryData.clone();
        return {
            success: true,
            datas,
            schoolsCount,
            limit: searchFeature.queryParam.limit,
            filteredSchoolsCount,
        };
    }
    async getSchools() {
        const schools = await this.model.find();
        return {
            success: true,
            schools,
        };
    }
    async getSchoolDetails(id) {
        const school = await this.model.findById(id);
        if (!school) {
            throw new errorHandler_1.ErrorHandler('School Not Found', 404);
        }
        return {
            success: true,
            school,
        };
    }
    async getAdminSchools() {
        const schools = await this.model.find();
        return {
            success: true,
            schools,
        };
    }
    async createSchool(createSchoolDto, image = null, logo = null, brandname = '', user = null, specifications = []) {
        let images = [];
        if (typeof image === 'string')
            images.push(image);
        else
            images = image;
        const imagesLink = [];
        for (let i = 0; i < images.length; i++) {
            const result = await this.cloudinaryService
                .uploadImage(images[i])
                .catch(() => {
                throw new common_1.BadRequestException('Invalid file type.');
            });
            imagesLink.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }
        const result = await this.cloudinaryService.uploadImage(logo).catch(() => {
            throw new common_1.BadRequestException('Invalid file type.');
        });
        const brandLogo = {
            public_id: result.public_id,
            url: result.secure_url,
        };
        createSchoolDto.brand = {
            name: brandname,
            logo: brandLogo,
        };
        image = imagesLink;
        let userId = user.id;
        let specs = [];
        specifications.forEach((s) => {
            specs.push(JSON.parse(s));
        });
        specifications = specs;
        const school = await this.model.create(Object.assign(Object.assign({}, createSchoolDto), { teacher: userId }));
        return {
            success: true,
            school,
        };
    }
    async updateSchool(id, updateSchoolDto, image = null) {
        let school = await this.model.findById(id);
        if (!school) {
            throw new errorHandler_1.ErrorHandler('School Not Found', 404);
        }
        if (image !== undefined) {
            let images = [];
            if (typeof image === 'string')
                images.push(image);
            else
                images = image;
            for (let i = 0; i < school.images.length; i++) {
                await this.cloudinaryService.destroyImage(school.images[i].public_id);
            }
            const imagesLink = [];
            for (let i = 0; i < images.length; i++) {
                const result = await this.cloudinaryService.uploadImage(images[i], {
                    folder: 'schools',
                });
                imagesLink.push({
                    public_id: result.public_id,
                    url: result.secure_url,
                });
            }
            images = imagesLink;
        }
        school = await this.model.findByIdAndUpdate({
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        return {
            success: true,
            school,
        };
    }
    async deleteSchool(id) {
        const school = await this.model.findById(id);
        if (!school)
            throw new common_1.NotFoundException('School Not Found');
        await school.remove();
        return {
            success: true,
        };
    }
    async createSchoolReview() {
        const review = {};
        throw new errorHandler_1.ErrorHandler('School Not Found', 404);
        return {
            success: true,
        };
    }
    async getSchoolReviews(id) {
        const school = await this.model.findById(id);
        if (!school) {
            throw new errorHandler_1.ErrorHandler('School Not Found', 404);
        }
        return {
            success: true,
        };
    }
    async deleteReview() {
        throw new errorHandler_1.ErrorHandler('School Not Found', 404);
        let avg = 0;
        return {
            success: true,
        };
    }
};
SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(configuration_1.schemaConfigs.SCHOOL_MODEL.toString())),
    __metadata("design:paramtypes", [mongoose_1.Model,
        cloudinary_service_1.CloudinaryService])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map