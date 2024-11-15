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
exports.RealtimeGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const realtime_service_1 = require("./realtime.service");
const create_realtime_dto_1 = require("./dto/create-realtime.dto");
const update_realtime_dto_1 = require("./dto/update-realtime.dto");
const socket_io_1 = require("socket.io");
let RealtimeGateway = class RealtimeGateway {
    constructor(realtimeService) {
        this.realtimeService = realtimeService;
    }
    afterInit(server) {
    }
    handleConnection(client, ...args) {
    }
    handleDisconnect(client) {
    }
    create(createRealtimeDto) {
        return this.realtimeService.create(createRealtimeDto);
    }
    findAll() {
        return this.realtimeService.findAll();
    }
    findOne(id) {
        return this.realtimeService.findOne(id);
    }
    update(updateRealtimeDto) {
        return this.realtimeService.update(updateRealtimeDto.id, updateRealtimeDto);
    }
    remove(id) {
        return this.realtimeService.remove(id);
    }
    handleMessage(client, text) {
        return { event: 'msgToClient', data: text };
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], RealtimeGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createRealtime'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_realtime_dto_1.CreateRealtimeDto]),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllRealtime'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneRealtime'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateRealtime'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_realtime_dto_1.UpdateRealtimeDto]),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeRealtime'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RealtimeGateway.prototype, "remove", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('msgToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Object)
], RealtimeGateway.prototype, "handleMessage", null);
RealtimeGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: true,
    }),
    __metadata("design:paramtypes", [realtime_service_1.RealtimeService])
], RealtimeGateway);
exports.RealtimeGateway = RealtimeGateway;
//# sourceMappingURL=realtime.gateway.js.map