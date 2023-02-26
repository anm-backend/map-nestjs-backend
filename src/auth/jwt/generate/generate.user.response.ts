import configuration from '../../../config/configuration';
import { Teacher } from '../../../apis/teacher/schemas/teacher.schema';
import { generateToken } from './generate.token';

// export interface SendToken {
//   success: boolean;
//   user: Teacher;
//   token: string;
// }

export const infoResult = (user: Teacher) => {
  const accessToken = generateToken(
    { id: user.id },
    {
      expiresIn: configuration().jwt.expire.access,
    },
  );
  const refreshToken = generateToken(
    { id: user.id, token: accessToken },
    {
      expiresIn: configuration().jwt.expire.refresh,
    },
  );

  // Teacher.update

  return {
    success: true,
    // user,
    user: {
      //   password: '$2a$10$Vj4Sxgg0CxpxnmxtG5zSaeADhiqP9FngF8c/y8mdKbiLvWSdcoIpO',
      //   createdAt: '2023-02-10T15:34:55.327Z',
      //   updatedAt: '2023-02-10T15:34:55.327Z',
      //   __v: 0,

      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      //   email: user.email,
      gender: user.gender,
      userId: user.userId,
      role: user.role,
    },
    token: {
      access_token: accessToken,
      refresh_token: refreshToken,
    },
  };
};
