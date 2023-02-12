import { Teacher } from 'src/apis/teacher/schemas/teacher.schema';
import {
  Brand,
  Review,
  School,
  Image,
  Specification,
} from '../schemas/school.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSchoolDto implements School {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school name' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school description' })
  description: string;

  @ApiProperty()
  highlights: string[];

  @ApiProperty()
  @Type(() => Specification)
  specifications: Specification[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school price' })
  price: Number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter cutted price' })
  cuttedPrice: Number;

  @ApiProperty()
  images: Image[];

  @ApiProperty()
  brand: Brand;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter school category' })
  category: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Please enter school stock' })
  @IsNumber({}, { each: true })
  @Max(4, { message: 'Stock cannot exceed limit 4' })
  stock: Number;

  @ApiProperty()
  warranty: Number;

  @ApiProperty()
  ratings: Number;

  @ApiProperty()
  numOfReviews: Number;

  @ApiProperty()
  reviews: Review[];

  @ApiProperty()
  teacher: Teacher;
}
