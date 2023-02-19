import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../../auth/entities/role.enum';

export class Avatar {
  @Prop({})
  public_id: string;

  @Prop({})
  url: string;
}

@Schema({ timestamps: true })
export class Teacher extends Document {
  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ trim: true, unique: true })
  email?: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({ required: true, trim: true, enum: ['Nam', 'Nữ', 'Khác'] })
  gender: string;

  @Prop({ required: true, trim: true, unique: true })
  userId: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({})
  avatar?: Avatar;

  @Prop({ required: true, enum: Role, default: 'user' })
  role: string;

  comparePassword: Function;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
