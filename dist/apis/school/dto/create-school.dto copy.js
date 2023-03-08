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
exports.CreateSchoolDto = void 0;
const teacher_schema_1 = require("../../teacher/schemas/teacher.schema");
const school_schema_1 = require("../schemas/school.schema");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateSchoolDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school name' }),
    __metadata("design:type", String)
], CreateSchoolDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school description' }),
    __metadata("design:type", String)
], CreateSchoolDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateSchoolDto.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => school_schema_1.Specification),
    __metadata("design:type", Array)
], CreateSchoolDto.prototype, "specifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school price' }),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter cutted price' }),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "cuttedPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateSchoolDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", school_schema_1.Brand)
], CreateSchoolDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school category' }),
    __metadata("design:type", String)
], CreateSchoolDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school stock' }),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Max)(4, { message: 'Stock cannot exceed limit 4' }),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "warranty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "ratings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateSchoolDto.prototype, "numOfReviews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateSchoolDto.prototype, "reviews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", teacher_schema_1.Teacher)
], CreateSchoolDto.prototype, "teacher", void 0);
exports.CreateSchoolDto = CreateSchoolDto;
//# sourceMappingURL=create-school.dto%20copy.js.map