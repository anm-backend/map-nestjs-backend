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
exports.AlertController = void 0;
const Method = require("@nestjs/common");
const alert_gateway_1 = require("./alert.gateway");
const swagger_1 = require("@nestjs/swagger");
const base_routes_1 = require("../base/base.routes");
let AlertController = class AlertController {
    constructor(alertGateway) {
        this.alertGateway = alertGateway;
    }
    sendToAll(dto) {
        this.alertGateway.sendToAll(dto.message);
        return dto;
    }
};
__decorate([
    Method.Post(),
    Method.HttpCode(200),
    __param(0, Method.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AlertController.prototype, "sendToAll", null);
AlertController = __decorate([
    (0, swagger_1.ApiTags)('Socket Api'),
    (0, base_routes_1.PrefixController)('socket'),
    __metadata("design:paramtypes", [alert_gateway_1.AlertGateway])
], AlertController);
exports.AlertController = AlertController;
//# sourceMappingURL=alert.controller.js.map