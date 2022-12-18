"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const apis_module_1 = require("./apis/apis.module");
const graphqls_module_1 = require("./graphqls/graphqls.module");
const database_module_1 = require("./database/database.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const auth_module_1 = require("./auth/auth.module");
const socket_module_1 = require("./socket/socket.module");
let AppModule = class AppModule {
    onModuleInit() {
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            graphqls_module_1.GraphqlsModule,
            apis_module_1.ApisModule,
            database_module_1.DatabaseModule,
            cloudinary_module_1.CloudinaryModule,
            auth_module_1.AuthModule,
            socket_module_1.SocketModule,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map