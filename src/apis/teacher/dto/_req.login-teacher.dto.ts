import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class RequestLoginTeacherDto {
  @ApiProperty({ example: 'admin' })
  @IsNotEmpty({ message: 'Mã giáo viên không được bỏ trống' })
  userId: string;

  @ApiProperty({ example: 'admin' })
  @IsNotEmpty({ message: 'Mật khẩu không được bỏ trống' })
  // @Min(3, { message: 'Mật khẩu' })
  password: string;
}
