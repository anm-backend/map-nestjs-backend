import {
  BadRequestException,
  // HttpCode,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { ErrorHandler } from '../../common/error-handle/errorHandler';
import { schemaConfigs } from '../../config/configuration';
import { CloudinaryService } from '../../uploads/cloudinary/cloudinary.service';
import { QueryParam } from '../../utils/searchFeatures';
import { BaseService } from '../base/base.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './schemas/school.schema';

@Injectable()
export class SchoolService extends BaseService<
  School,
  CreateSchoolDto | UpdateSchoolDto
> {
  constructor(
    @Inject(schemaConfigs.SCHOOL_MODEL.toString())
    private schoolModel: Model<School, {}>,
    private cloudinaryService: CloudinaryService,
  ) {
    super(schoolModel);
  }

  // Get All Schools
  async getAllSchools(query: QueryParam) {
    const schoolsCount = await this.model.countDocuments();
    const queryData = this.model.find();

    const searchFeature = new this.SearchFeatures(queryData, query)
      .search()
      .filter();

    let datas = await searchFeature.queryData;
    let filteredSchoolsCount = datas.length;

    searchFeature.pagination(query.limit || 12);

    datas = await searchFeature.queryData.clone();

    return {
      success: true,
      datas,
      schoolsCount,
      limit: searchFeature.queryParam.limit,
      filteredSchoolsCount,
    };
  }
  // Get All Schools ---School Sliders
  async getSchools() {
    const schools = await this.model.find();

    return {
      success: true,
      schools,
    };
  }
  // Get School Details
  async getSchoolDetails(id: string) {
    const school = await this.model.findById(id);

    if (!school) {
      throw new ErrorHandler('School Not Found', 404);
    }

    return {
      success: true,
      school,
    };
  }

  // Get All Schools ---ADMIN
  async getAdminSchools() {
    const schools = await this.model.find();

    return {
      success: true,
      schools,
    };
  }
  // Create School ---ADMIN
  async createSchool(
    createSchoolDto: CreateSchoolDto,
    image: any = null,
    logo: Express.Multer.File = null,
    brandname: any = '',
    user: any = null,
    specifications: any = [],
  ) {
    let images = [];
    if (typeof image === 'string') images.push(image);
    else images = image;

    const imagesLink = [];

    for (let i = 0; i < images.length; i++) {
      const result = await this.cloudinaryService
        .uploadImage(images[i])
        .catch(() => {
          throw new BadRequestException('Invalid file type.');
        });
      imagesLink.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    const result = await this.cloudinaryService.uploadImage(logo).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
    const brandLogo = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    createSchoolDto.brand = {
      name: brandname,
      logo: brandLogo,
    };
    image = imagesLink;
    let userId = user.id;

    let specs = [];
    specifications.forEach((s) => {
      specs.push(JSON.parse(s));
    });
    specifications = specs;

    const school = await this.model.create<CreateSchoolDto>({
      ...createSchoolDto,
      teacher: userId,
    });

    return {
      success: true,
      school,
    };
  }
  // Update School ---ADMIN
  async updateSchool(
    id: string,
    updateSchoolDto: UpdateSchoolDto,
    image: any = null,
  ) {
    let school = await this.model.findById(id);

    if (!school) {
      throw new ErrorHandler('School Not Found', 404);
    }

    if (image !== undefined) {
      let images = [];
      if (typeof image === 'string') images.push(image);
      else images = image;

      for (let i = 0; i < school.images.length; i++) {
        await this.cloudinaryService.destroyImage(school.images[i].public_id);
      }

      const imagesLink = [];

      for (let i = 0; i < images.length; i++) {
        const result = await this.cloudinaryService.uploadImage(images[i], {
          folder: 'schools',
        });

        imagesLink.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      images = imagesLink;
    }

    // if (updateSchoolDto.logo.length > 0) {
    //   await cloudinary.v2.uploader.destroy(school.brand.logo.public_id);
    //   const result = await cloudinary.v2.uploader.upload(req.body.logo, {
    //     folder: "brands",
    //   });
    //   const brandLogo = {
    //     public_id: result.public_id,
    //     url: result.secure_url,
    //   };

    //   req.body.brand = {
    //     name: req.body.brandname,
    //     logo: brandLogo,
    //   };
    // }

    // let specs = [];
    // req.body.specifications.forEach((s) => {
    //   specs.push(JSON.parse(s));
    // });
    // req.body.specifications = specs;
    // req.body.user = req.user.id;

    school = await this.model.findByIdAndUpdate(
      // id, req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      },
    );

    return {
      success: true,
      school,
    };
  }
  // Delete School ---ADMIN
  async deleteSchool(id: string) {
    const school = await this.model.findById(id);

    if (!school) throw new NotFoundException('School Not Found');

    // for (let i = 0; i < school.images.length; i++)
      // await this.cloudinaryService.destroyImage(school.images[i].public_id);

    await school.remove();

    return {
      success: true,
    };
  }

  // Create OR Update Reviews
  async createSchoolReview() {
    // const { rating, comment, schoolId } = req.body;

    const review = {
      // user: req.user._id,
      // name: req.user.name,
      // rating: Number(rating),
      // comment,
    };

    // const school = await this.model.findById(schoolId);

    // if (!school) {
    throw new ErrorHandler('School Not Found', 404);
    // }

    // const isReviewed = school.reviews.find(
    //   (review) => review.user.toString() === req.user._id.toString()
    // );

    // if (isReviewed) {
    //   school.reviews.forEach((rev) => {
    //     if (rev.user.toString() === req.user._id.toString())
    //       (rev.rating = rating), (rev.comment = comment);
    //   });
    // } else {
    //   school.reviews.push(review);
    //   school.numOfReviews = school.reviews.length;
    // }

    // let avg = 0;

    // school.reviews.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // school.ratings = avg / school.reviews.length;

    // await this.model.save({ validateBeforeSave: false });

    return {
      success: true,
    };
  }

  // Get All Reviews of School
  async getSchoolReviews(id: string) {
    const school = await this.model.findById(id);

    if (!school) {
      throw new ErrorHandler('School Not Found', 404);
    }

    return {
      success: true,
      // reviews: school.reviews,
    };
  }

  // Delete Reveiws
  async deleteReview() {
    // const school = await this.model.findById(req.query.schoolId);

    // if (!school) {
    throw new ErrorHandler('School Not Found', 404);
    // }

    // const reviews = school.reviews.filter(
    //   (rev) => rev._id.toString() !== req.query.id.toString()
    // );

    let avg = 0;

    // reviews.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // let ratings = 0;

    // if (reviews.length === 0) {
    //   ratings = 0;
    // } else {
    //   ratings = avg / reviews.length;
    // }

    // const numOfReviews = reviews.length;

    // await this.model.findByIdAndUpdate(
    //   // req.query.schoolId,
    //   {
    //     reviews,
    //     ratings: Number(ratings),
    //     numOfReviews,
    //   },
    //   {
    //     new: true,
    //     runValidators: true,
    //     useFindAndModify: false,
    //   }
    // );

    return {
      success: true,
    };
  }
}
