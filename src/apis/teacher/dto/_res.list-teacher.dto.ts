import { ApiProperty } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';

export class ResponseListTeacherDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  page: number;

  @ApiProperty()
  numberOfPages: number;

  @ApiProperty()
  datas: CreateTeacherDto[];
}
