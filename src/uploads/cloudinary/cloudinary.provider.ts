import { ConfigOptions, v2 } from 'cloudinary';
import configuration from '../../config/configuration';

export class CloudinaryProvider {
  constructor() {
    this.useFactory({
      cloud_name: configuration().cloudinary.name,
      api_key: configuration().cloudinary.apiKey,
      api_secret: configuration().cloudinary.apiSecret,
    });
  }

  useFactory(new_config?: ConfigOptions): ConfigOptions {
    console.log(`Connect to cloudinary named '${new_config.cloud_name}'`);
    return v2.config(new_config);
  }
}
