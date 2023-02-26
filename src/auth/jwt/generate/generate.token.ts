import { SignOptions, sign } from 'jsonwebtoken';
import configuration from '../../../config/configuration';

export const generateToken = (data: any, config?: SignOptions): string =>
  sign(data, configuration().jwt.secret, config);
