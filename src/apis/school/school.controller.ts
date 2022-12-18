import * as Method from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryParam } from 'src/utils/searchFeatures';
import { PrefixController } from '../base/base.routes';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Role } from 'src/auth/entities/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('School')
@PrefixController('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Method.Get()
  getAllSchools(@Method.Query() query: QueryParam) {
    return this.schoolService.getAllSchools(query);
  }
  @Method.Get('/all')
  getSchools() {
    return this.schoolService.getSchools();
  }
  @Method.Get('/:id')
  getSchoolDetails(@Method.Param('id') id: string) {
    return this.schoolService.getSchoolDetails((id = id));
  }

  @Method.Get('/admin/schools')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  getAdminSchools() {
    return this.schoolService.getAdminSchools();
  }
  @Method.Post('/admin/school/new')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(FilesInterceptor('images'))
  @UsePipes(new ValidationPipe({ transform: true }))
  createSchool(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Method.Body() createSchoolDto: CreateSchoolDto,
  ) {
    console.log({
      images,
      createSchoolDto: {
        ...createSchoolDto,
        specificationsJson: JSON.parse(
          createSchoolDto.specifications.toString(),
        )[0],
      },
    });
    return '1';
    // return this.schoolService.createSchool(createSchoolDto, images);
  }
  @Method.Put('/admin/school/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  updateSchool(
    @Method.Param('id') id: string,
    @Method.Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.updateSchool(id, updateSchoolDto);
  }
  @Method.Delete('/admin/school/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  deleteSchool(@Method.Param('id') id: string) {
    return this.schoolService.deleteSchool(id);
  }

  @Method.Put('/review')
  @UseGuards(JwtAuthGuard)
  createSchoolReview(
    @Method.Param('id') id: string,
    @Method.Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.createSchoolReview();
  }

  @Method.Get('/admin/reviews')
  getSchoolReviews(
    @Method.Param('id') id: string,
    @Method.Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.getSchoolReviews(id);
  }
  @Method.Delete('/admin/reviews')
  @UseGuards(JwtAuthGuard)
  deleteReview(
    @Method.Param('id') id: string,
    @Method.Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.deleteReview();
  }
}
