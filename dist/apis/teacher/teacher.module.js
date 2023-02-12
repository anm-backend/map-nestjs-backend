"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const teacher_controller_1 = require("./teacher.controller");
const teacher_providers_1 = require("./teacher.providers");
const database_module_1 = require("../../database/database.module");
const cloudinary_module_1 = require("../../uploads/cloudinary/cloudinary.module");
let TeacherModule = class TeacherModule {
};
TeacherModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cloudinary_module_1.CloudinaryModule],
        controllers: [teacher_controller_1.TeacherController],
        providers: [teacher_service_1.TeacherService, ...teacher_providers_1.teacherProviders],
        exports: [teacher_service_1.TeacherService],
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.module.js.map