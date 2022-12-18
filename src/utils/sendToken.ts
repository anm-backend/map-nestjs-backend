import { HttpStatus } from '@nestjs/common';
import { Teacher } from 'src/apis/teacher/schemas/teacher.schema';

export interface SendToken {
  success: boolean;
  user: Teacher;
  token: string;
}

export const sendToken = (user: Teacher): SendToken => {
  const token = user.getJWTToken();

  return {
    success: true,
    user,
    token,
  };
};
