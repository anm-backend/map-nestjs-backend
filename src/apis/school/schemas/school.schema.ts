import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import * as mongoose from 'mongoose';
import { Teacher } from '../../teacher/schemas/teacher.schema';

@Schema()
export class Specification extends mongoose.Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;
}
export const SpecificationSchema = SchemaFactory.createForClass(Specification);
@Schema()
export class Image {
  @Prop({ required: true })
  public_id: string;

  @Prop({ required: true })
  url: string;
}
export const ImageSchema = SchemaFactory.createForClass(Image);
@Schema()
export class Logo {
  @Prop({ required: true })
  public_id: string;

  @Prop({ required: true })
  url: string;
}
export const LogoSchema = SchemaFactory.createForClass(Logo);
@Schema()
export class Brand {
  @Prop({ required: true })
  name: string;

  @Prop({ type: LogoSchema })
  logo: Logo;
}
export const BrandSchema = SchemaFactory.createForClass(Brand);

@Schema()
export class Review {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  })
  teacher: Teacher;

  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  name: string;

  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  rating: Number;

  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  comment: string;
}

@Schema({ timestamps: true })
export class School {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  highlights: string[];

  @Prop({})
  specifications: Specification[];

  @Prop({ required: true })
  price: Number;

  @Prop({ required: true })
  cuttedPrice: Number;

  @Prop({})
  images: Image[];

  @Prop({})
  brand: Brand;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, default: 1 })
  stock: Number;

  @Prop({ default: 1 })
  warranty: Number;

  @Prop({ default: 0 })
  ratings: Number;

  @Prop({ default: 0 })
  numOfReviews: Number;

  @Prop({})
  reviews: Review[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  })
  teacher: Teacher;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
