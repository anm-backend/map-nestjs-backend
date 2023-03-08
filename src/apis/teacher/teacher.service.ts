import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { infoResult } from '../../auth/jwt/generate/generate.user.response';
import { schemaConfigs } from '../../config/configuration';
import { CloudinaryService } from '../../uploads/cloudinary/cloudinary.service';
import { BaseService } from '../base/base.service';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { RequestRegisterTeacherDto } from './dto/_req.register-teacher.dto';
import { ResponseListTeacherDto } from './dto/_res.list-teacher.dto';
import { PaginationBaseDto } from '../base/dto/pagination-base.dto';

@Injectable()
export class TeacherService extends BaseService<
  Teacher,
  CreateTeacherDto | UpdateTeacherDto
> {
  constructor(
    @Inject(schemaConfigs.TEACHER_MODEL.toString())
    private teacherModel: Model<Teacher, {}>,
    private cloudinaryService: CloudinaryService,
  ) {
    super(teacherModel);
  }

  // AUTH
  async register(
    // image: Express.Multer.File,
    requestRegisterTeacherDto: RequestRegisterTeacherDto,
  ) {
    try {
      // const myCloud = await this.cloudinaryService.uploadImage(image, {
      //   folder: 'avatars',
      //   width: 150,
      //   crop: 'scale',
      // });
      const { firstName, lastName, email, userId, gender, password, phone } =
        requestRegisterTeacherDto;
      const user = await this.model.create({
        firstName,
        lastName,
        email,
        gender,
        password,
        userId,
        phone,
        // avatar: {
        //   public_id: myCloud.public_id,
        //   url: myCloud.secure_url,
        // },
      });

      return infoResult(user);
    } catch (error) {
      throw new UnauthorizedException([error]);
    }
  }
  async login(loginTeacher: RequestLoginTeacherDto) {
    const { userId, password } = loginTeacher;

    const user = await this.model.findOne({ userId }).select([]);
    if (!user) throw new UnauthorizedException(['Tài khoản không tồn tại']);

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) throw new UnauthorizedException(['Sai mật khẩu']);

    return infoResult(user);
  }
  async logoutTeacher() {
    // res.cookie("token", null, {
    //   expires: new Date(Date.now()),
    //   httpOnly: true,
    // });
    return {
      success: true,
      message: 'Logged Out',
    };
  }

  // TEACHER
  async getAll(
    paginationBaseDto: PaginationBaseDto,
    search: string,
  ): Promise<ResponseListTeacherDto> {
    const { page, limit } = paginationBaseDto;
    try {
      const searchData = JSON.parse(search.trim().length === 0 ? '{}' : search);

      const datas: Teacher[] = await this.model
        .find(searchData)
        .skip((page - 1) * limit)
        .limit(limit)
        .select(['-password']);
      const numberOfPages: number = Math.ceil(
        (await this.model.countDocuments()) / limit,
      );

      return {
        success: true,
        page,
        numberOfPages,
        datas,
      };
    } catch {
      throw new BadRequestException(['Dữ liệu tìm kiếm sai định dạng']);
    }
  }
  async getDetailById(id: string) {
    const data: Teacher = await this.model.findById(id).select(['-password']);
    return {
      success: true,
      data,
    };
  }
  // // Forgot Password
  // forgotPassword(async ){
  //   const user = await Teacher.findOne({ email: req.body.email });
  //   if (!user) {
  //     return next(new ErrorHandler("Teacher Not Found", 404));
  //   }
  //   const resetToken = await user.getResetPasswordToken();
  //   await user.save({ validateBeforeSave: false });
  //   // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
  //   const resetPasswordUrl = `https://${req.get(
  //     "host"
  //   )}/password/reset/${resetToken}`;
  //   // const message = `Your password reset token is : \n\n ${resetPasswordUrl}`;
  //   try {
  //     await sendEmail({
  //       email: user.email,
  //       templateId: configuration().email.sendgrid_reset_templateid,
  //       data: {
  //         reset_url: resetPasswordUrl,
  //       },
  //     });
  //     return {
  //       success: true,
  //       message: `Email sent to ${user.email} successfully`,
  //     });
  //   } catch (error) {
  //     user.resetPasswordToken = undefined;
  //     user.resetPasswordExpire = undefined;
  //     await user.save({ validateBeforeSave: false });
  //     return next(new ErrorHandler(error.message, 500));
  //   }
  // });
  // // Reset Password
  // resetPassword(async ){
  //   // create hash token
  //   const resetPasswordToken = crypto
  //     .createHash("sha256")
  //     .update(req.params.token)
  //     .digest("hex");
  //   const user = await Teacher.findOne({
  //     resetPasswordToken,
  //     resetPasswordExpire: { $gt: Date.now() },
  //   });
  //   if (!user) {
  //     return next(new ErrorHandler("Invalid reset password token", 404));
  //   }
  //   user.password = req.body.password;
  //   user.resetPasswordToken = undefined;
  //   user.resetPasswordExpire = undefined;
  //   await user.save();
  //   sendToken(user, 200, res);
  // });
  // // Update Password
  // updatePassword(async ){
  //   const user = await Teacher.findById(req.user.id).select("+password");
  //   const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  //   if (!isPasswordMatched) {
  //     return next(new ErrorHandler("Old Password is Invalid", 400));
  //   }
  //   user.password = req.body.newPassword;
  //   await user.save();
  //   sendToken(user, 201, res);
  // });
  // // Update Teacher Profile
  // updateProfile(async ){
  //   const newTeacherData = {
  //     name: req.body.name,
  //     email: req.body.email,
  //   };
  //   if (req.body.avatar !== "") {
  //     const user = await Teacher.findById(req.user.id);
  //     const imageId = user.avatar.public_id;
  //     await cloudinary.v2.uploader.destroy(imageId);
  //     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //       folder: "avatars",
  //       width: 150,
  //       crop: "scale",
  //     });
  //     newTeacherData.avatar = {
  //       public_id: myCloud.public_id,
  //       url: myCloud.secure_url,
  //     };
  //   }
  //   await Teacher.findByIdAndUpdate(req.user.id, newTeacherData, {
  //     new: true,
  //     runValidators: true,
  //     useFindAndModify: true,
  //   });
  //   return {
  //     success: true,
  //   });
  // });

  // ADMIN DASHBOARD
  // Get All Teachers --ADMIN

  // // Get Single Teacher Details --ADMIN
  // getSingleTeacher(async ){
  //   const user = await Teacher.findById(req.params.id);
  //   if (!user) {
  //     return next(
  //       new ErrorHandler(`Teacher doesn't exist with id: ${req.params.id}`, 404)
  //     );
  //   }
  //   return {
  //     success: true,
  //     user,
  //   });
  // });
  // // Update Teacher Role --ADMIN
  // updateTeacherRole(async ){
  //   const newTeacherData = {
  //     name: req.body.name,
  //     email: req.body.email,
  //     gender: req.body.gender,
  //     role: req.body.role,
  //   };
  //   await Teacher.findByIdAndUpdate(req.params.id, newTeacherData, {
  //     new: true,
  //     runValidators: true,
  //     useFindAndModify: false,
  //   });
  //   return {
  //     success: true,
  //   });
  // });
  // // Delete Role --ADMIN
  // deleteTeacher(async ){
  //   const user = await Teacher.findById(req.params.id);
  //   if (!user) {
  //     return next(
  //       new ErrorHandler(`Teacher doesn't exist with id: ${req.params.id}`, 404)
  //     );
  //   }
  //   await user.remove();
  //   return {
  //     success: true,
  //   });
  // });
}

// const Teacher = require("../models/userModel");
// const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
// const sendToken = require("../utils/sendToken");
// const ErrorHandler = require("../utils/errorHandler");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
// const cloudinary = require("cloudinary");
