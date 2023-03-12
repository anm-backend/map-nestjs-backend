"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeService = void 0;
const common_1 = require("@nestjs/common");
let RealtimeService = class RealtimeService {
    create(createRealtimeDto) {
        return 'This action adds a new realtime';
    }
    findAll() {
        return `This action returns all realtime`;
    }
    findOne(id) {
        return `This action returns a #${id} realtime`;
    }
    update(id, updateRealtimeDto) {
        return `This action updates a #${id} realtime`;
    }
    remove(id) {
        return `This action removes a #${id} realtime`;
    }
};
RealtimeService = __decorate([
    (0, common_1.Injectable)()
], RealtimeService);
exports.RealtimeService = RealtimeService;
//# sourceMappingURL=realtime.service.js.map