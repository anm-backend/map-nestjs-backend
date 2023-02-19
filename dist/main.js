"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const configuration_1 = require("./config/configuration");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
function CreateSwagger(app) {
    const docs = '/docs';
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Map Find School')
        .setDescription('This is an api document for `Map Find School` Project')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(docs, app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalFilters();
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'));
    CreateSwagger(app);
    await app.listen((0, configuration_1.default)().port);
    console.log(`Server running on PORT: ${(0, configuration_1.default)().port}/`);
}
bootstrap();
//# sourceMappingURL=main.js.map