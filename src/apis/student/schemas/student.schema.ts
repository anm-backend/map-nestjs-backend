import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { Role } from '../../../auth/entities/role.enum';

@Schema({ timestamps: true })
export class Student
  // extends Document
{
  @Prop({ required: true, trim: true, unique: true })
  identityCode: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  classStudy: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
