"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolModule = void 0;
const common_1 = require("@nestjs/common");
const school_service_1 = require("./school.service");
const school_controller_1 = require("./school.controller");
const database_module_1 = require("../../database/database.module");
const school_providers_1 = require("./school.providers");
const cloudinary_module_1 = require("../../cloudinary/cloudinary.module");
let SchoolModule = class SchoolModule {
};
SchoolModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cloudinary_module_1.CloudinaryModule],
        controllers: [school_controller_1.SchoolController],
        providers: [school_service_1.SchoolService, ...school_providers_1.schoolProviders],
    })
], SchoolModule);
exports.SchoolModule = SchoolModule;
//# sourceMappingURL=school.module.js.map