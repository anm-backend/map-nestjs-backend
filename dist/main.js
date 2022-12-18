"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const configuration_1 = require("./config/configuration");
const path_1 = require("path");
async function bootstrap() {
    const PORT = (0, configuration_1.default)().port;
    const docs = '/docs';
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest API')
        .setDescription('Swagger for Nest API')
        .setVersion('1.0')
        .addTag('School Map')
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'));
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(docs, app, document);
    await app.listen(PORT);
    console.log(`Server running on PORT: ${PORT}/`);
}
bootstrap();
//# sourceMappingURL=main.js.map