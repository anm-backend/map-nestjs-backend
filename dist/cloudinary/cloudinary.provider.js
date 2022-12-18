"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
class CloudinaryProvider {
    constructor() {
        this.useFactory({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    useFactory(new_config) {
        console.log(`Connect to cloudinary named '${new_config.cloud_name}'`);
        return cloudinary_1.v2.config(new_config);
    }
}
exports.CloudinaryProvider = CloudinaryProvider;
//# sourceMappingURL=cloudinary.provider.js.map