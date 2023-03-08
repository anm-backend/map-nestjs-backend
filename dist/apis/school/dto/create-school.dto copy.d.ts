import { Teacher } from 'src/apis/teacher/schemas/teacher.schema';
import { Brand, Review, School, Image, Specification } from '../schemas/school.schema';
export declare class CreateSchoolDto implements School {
    name: string;
    description: string;
    highlights: string[];
    specifications: Specification[];
    price: Number;
    cuttedPrice: Number;
    images: Image[];
    brand: Brand;
    category: string;
    stock: Number;
    warranty: Number;
    ratings: Number;
    numOfReviews: Number;
    reviews: Review[];
    teacher: Teacher;
}
