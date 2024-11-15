"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApisModule = void 0;
const common_1 = require("@nestjs/common");
const school_module_1 = require("./school/school.module");
const teacher_module_1 = require("./teacher/teacher.module");
const student_module_1 = require("./student/student.module");
const socket_module_1 = require("./socket/socket.module");
let ApisModule = class ApisModule {
};
ApisModule = __decorate([
    (0, common_1.Module)({
        imports: [school_module_1.SchoolModule, teacher_module_1.TeacherModule, student_module_1.StudentModule, socket_module_1.GatewayModule],
        exports: [school_module_1.SchoolModule, teacher_module_1.TeacherModule, student_module_1.StudentModule, socket_module_1.GatewayModule],
    })
], ApisModule);
exports.ApisModule = ApisModule;
//# sourceMappingURL=apis.module.js.map