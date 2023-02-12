import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyF, MinF } from 'src/apis/base/dto/create-base.dto';

export class RequestLoginTeacherDto {
  @ApiProperty()
  @IsNotEmptyF('Mã giáo viên')
  userId: string;

  @ApiProperty()
  @IsNotEmptyF('Mật khẩu')
  // @MinF(3, 'Mật khẩu')
  password: string;
}
