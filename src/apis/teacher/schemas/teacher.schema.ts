import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, Min } from 'class-validator';
import { Role } from '../../../auth/entities/role.enum';
import { ApiProperty } from '@nestjs/swagger';

class Avatar {
  @ApiProperty()
  @Prop({})
  public_id: string;

  @ApiProperty()
  @Prop({})
  url: string;
}

@Schema({ timestamps: true })
export class Teacher extends Document {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  @Prop({ required: true, trim: true })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Your Email' })
  @Prop({ required: true, trim: true, unique: true })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Gender' })
  @Prop({ required: true, trim: true })
  gender: string;

  @ApiProperty()
  @Min(3, { message: 'Password should have atleast 8 chars' })
  @IsNotEmpty({ message: 'Please Enter Your Password' })
  @Prop({ required: true, select: false })
  password: string;

  @ApiProperty()
  @Prop({})
  avatar: Avatar;

  @ApiProperty()
  @Prop({ required: true, enum: Role, default: 'user' })
  role: string;

  @ApiProperty()
  @Prop({})
  resetPasswordToken: string;

  @ApiProperty()
  @Prop({})
  resetPasswordExpire: Date;

  comparePassword: Function;
  getJWTToken: Function;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
