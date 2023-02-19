"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const configuration_1 = require("../../config/configuration");
class CloudinaryProvider {
    constructor() {
        this.useFactory({
            cloud_name: (0, configuration_1.default)().cloudinary.name,
            api_key: (0, configuration_1.default)().cloudinary.apiKey,
            api_secret: (0, configuration_1.default)().cloudinary.apiSecret,
        });
    }
    useFactory(new_config) {
        console.log(`Connect to cloudinary named '${new_config.cloud_name}'`);
        return cloudinary_1.v2.config(new_config);
    }
}
exports.CloudinaryProvider = CloudinaryProvider;
//# sourceMappingURL=cloudinary.provider.js.map