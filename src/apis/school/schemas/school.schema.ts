import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  isNotEmptyObject,
  IsNumber,
  Max,
} from 'class-validator';
import * as mongoose from 'mongoose';
import { Teacher } from '../../teacher/schemas/teacher.schema';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
class Specification extends mongoose.Document {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;
}
export const SpecificationSchema = SchemaFactory.createForClass(Specification);
@Schema()
class Image {
  @ApiProperty()
  @Prop({ required: true })
  public_id: string;

  @ApiProperty()
  @Prop({ required: true })
  url: string;
}
export const ImageSchema = SchemaFactory.createForClass(Image);
@Schema()
class Logo {
  @ApiProperty()
  @Prop({ required: true })
  public_id: string;

  @ApiProperty()
  @Prop({ required: true })
  url: string;
}
export const LogoSchema = SchemaFactory.createForClass(Logo);
@Schema()
class Brand {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ type: LogoSchema })
  logo: Logo;
}
export const BrandSchema = SchemaFactory.createForClass(Brand);

@Schema()
class Review {
  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true })
  teacher: Teacher;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  rating: Number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school stock' })
  @Prop({ required: true })
  comment: string;
}

@Schema({ timestamps: true })
export class School {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school name' })
  @Prop({ required: true, trim: true })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school description' })
  @Prop({ required: true })
  description: string;

  @ApiProperty()
  @Prop({ type: [String], required: true })
  highlights: string[];

  @ApiProperty()
  @Type(() => Specification)
  @Prop({})
  specifications: Specification[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school price' })
  @Prop({ required: true })
  price: Number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter cutted price' })
  @Prop({ required: true })
  cuttedPrice: Number;

  @ApiProperty()
  @Prop({})
  images: Image[];

  @ApiProperty()
  @Prop({})
  brand: Brand;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school category' })
  @Prop({ required: true })
  category: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Please enter school stock' })
  @IsNumber({}, { each: true })
  @Max(4, { message: 'Stock cannot exceed limit 4' })
  @Prop({ required: true, default: 1 })
  stock: Number;

  @ApiProperty()
  @Prop({ default: 1 })
  warranty: Number;

  @ApiProperty()
  @Prop({ default: 0 })
  ratings: Number;

  @ApiProperty()
  @Prop({ default: 0 })
  numOfReviews: Number;

  @ApiProperty()
  @Prop({})
  reviews: Review[];

  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  })
  teacher: Teacher;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
