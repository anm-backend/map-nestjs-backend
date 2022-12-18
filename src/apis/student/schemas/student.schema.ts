import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty, Min } from 'class-validator';
import { Role } from '../../../auth/entities/role.enum';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Student extends Document {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Your Identity Code' })
  @Prop({ required: true, trim: true, unique: true })
  identityCode: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  @Prop({ required: true, trim: true })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please Enter Your Class Study' })
  @Prop({ required: true, trim: true })
  classStudy: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
