import * as mongoose from 'mongoose';
import { Teacher } from '../../teacher/schemas/teacher.schema';
declare class Specification extends mongoose.Document {
    title: string;
    description: string;
}
export declare const SpecificationSchema: mongoose.Schema<Specification, mongoose.Model<Specification, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Specification>;
declare class Image {
    public_id: string;
    url: string;
}
export declare const ImageSchema: mongoose.Schema<Image, mongoose.Model<Image, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Image>;
declare class Logo {
    public_id: string;
    url: string;
}
export declare const LogoSchema: mongoose.Schema<Logo, mongoose.Model<Logo, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Logo>;
declare class Brand {
    name: string;
    logo: Logo;
}
export declare const BrandSchema: mongoose.Schema<Brand, mongoose.Model<Brand, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Brand>;
declare class Review {
    teacher: Teacher;
    name: string;
    rating: Number;
    comment: string;
}
export declare class School {
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
export declare const SchoolSchema: mongoose.Schema<School, mongoose.Model<School, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, School>;
export {};
