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
exports.SchoolSchema = exports.School = exports.Review = exports.BrandSchema = exports.Brand = exports.LogoSchema = exports.Logo = exports.ImageSchema = exports.Image = exports.SpecificationSchema = exports.Specification = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose = require("mongoose");
const teacher_schema_1 = require("../../teacher/schemas/teacher.schema");
let Specification = class Specification extends mongoose.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Specification.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Specification.prototype, "description", void 0);
Specification = __decorate([
    (0, mongoose_1.Schema)()
], Specification);
exports.Specification = Specification;
exports.SpecificationSchema = mongoose_1.SchemaFactory.createForClass(Specification);
let Image = class Image {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Image.prototype, "public_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Image.prototype, "url", void 0);
Image = __decorate([
    (0, mongoose_1.Schema)()
], Image);
exports.Image = Image;
exports.ImageSchema = mongoose_1.SchemaFactory.createForClass(Image);
let Logo = class Logo {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Logo.prototype, "public_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Logo.prototype, "url", void 0);
Logo = __decorate([
    (0, mongoose_1.Schema)()
], Logo);
exports.Logo = Logo;
exports.LogoSchema = mongoose_1.SchemaFactory.createForClass(Logo);
let Brand = class Brand {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.LogoSchema }),
    __metadata("design:type", Logo)
], Brand.prototype, "logo", void 0);
Brand = __decorate([
    (0, mongoose_1.Schema)()
], Brand);
exports.Brand = Brand;
exports.BrandSchema = mongoose_1.SchemaFactory.createForClass(Brand);
let Review = class Review {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }),
    __metadata("design:type", teacher_schema_1.Teacher)
], Review.prototype, "teacher", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school stock' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Review.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school stock' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter school stock' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Review.prototype, "comment", void 0);
Review = __decorate([
    (0, mongoose_1.Schema)()
], Review);
exports.Review = Review;
let School = class School {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], School.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], School.prototype, "highlights", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Array)
], School.prototype, "specifications", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], School.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], School.prototype, "cuttedPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Array)
], School.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Brand)
], School.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], School.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], School.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], School.prototype, "warranty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], School.prototype, "ratings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], School.prototype, "numOfReviews", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Array)
], School.prototype, "reviews", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }),
    __metadata("design:type", teacher_schema_1.Teacher)
], School.prototype, "teacher", void 0);
School = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], School);
exports.School = School;
exports.SchoolSchema = mongoose_1.SchemaFactory.createForClass(School);
//# sourceMappingURL=school.schema.js.map