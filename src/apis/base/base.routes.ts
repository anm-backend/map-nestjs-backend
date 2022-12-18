import { Controller } from '@nestjs/common';
import { posix } from 'path';

export function PrefixController(path: string = '') {
  return Controller({
    path: posix.join('api', 'v1', path),
    version: '1',
  });
}
