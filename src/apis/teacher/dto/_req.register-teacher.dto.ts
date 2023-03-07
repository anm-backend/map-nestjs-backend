import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class RequestRegisterTeacherDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Họ giáo viên không được bỏ trống' })
  firstName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Tên giáo viên không được bỏ trống' })
  lastName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giới tính giáo viên không được bỏ trống' })
  gender: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Email giáo viên không được bỏ trống' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Số điện thoại giáo viên không được bỏ trống' })
  phone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Mã giáo viên không được bỏ trống' })
  userId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Mật khẩu không được bỏ trống' })
  // @Min(3, { message: 'Mật khẩu' })
  password: string;
}
