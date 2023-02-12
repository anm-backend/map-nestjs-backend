import { ConfigOptions, v2 } from 'cloudinary';

export class CloudinaryProvider {
  constructor() {
    this.useFactory({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  useFactory(new_config?: ConfigOptions): ConfigOptions {
    console.log(`Connect to cloudinary named '${new_config.cloud_name}'`);
    return v2.config(new_config);
  }
}
