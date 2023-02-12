import {
  // Match,
  IsEmail,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Avatar, Teacher } from '../schemas/teacher.schema';
import { IsNotEmptyF, MinF } from 'src/apis/base/dto/create-base.dto';

export class CreateTeacherDto {
  @ApiProperty()
  @IsNotEmptyF('Họ')
  firstName: string;

  @ApiProperty()
  @IsNotEmptyF('Tên')
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  @IsNotEmptyF('Giới tính')
  gender: string;

  @ApiProperty()
  @IsNotEmptyF('Mã giáo viên')
  userId: string;

  @ApiProperty()
  @IsNotEmptyF('Mật khẩu')
  password: string;

  @ApiProperty()
  avatar?: Avatar;

  @ApiProperty()
  role: string;

  comparePassword: Function;
  getJWTToken: Function;
  // @Match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)
}
