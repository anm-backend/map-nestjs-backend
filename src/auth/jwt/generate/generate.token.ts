import { sign } from 'jsonwebtoken';
import configuration from '../../../config/configuration';

export const generateToken = (data: any): string =>
  sign(data, configuration().jwt.secret, {
    expiresIn: configuration().jwt.expire,
  });
