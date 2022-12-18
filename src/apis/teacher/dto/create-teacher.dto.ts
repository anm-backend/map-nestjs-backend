// import { IsEmail, IsNotEmpty, Match } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '../schemas/teacher.schema';

export class CreateTeacherDto extends Teacher {
  // @Match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)
  @ApiProperty()
  password: string;
}
