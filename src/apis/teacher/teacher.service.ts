import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { schemaConfigs } from 'src/config/configuration';
import { sendToken, SendToken } from 'src/utils/sendToken';
import { BaseService } from '../base/base.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';

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

  // Register Teacher
  async registerTeacher(
    image: Express.Multer.File,
    createTeacherDto: CreateTeacherDto,
  ): Promise<SendToken> {
    const myCloud = await this.cloudinaryService.uploadImage(image, {
      folder: 'avatars',
      width: 150,
      crop: 'scale',
    });
    const { name, email, gender, password } = createTeacherDto;
    const user = await this.model.create({
      name,
      email,
      gender,
      password,
      // avatar: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });
    return sendToken(user);
  }
  // Login Teacher
  async loginTeacher(email: string, password: string): Promise<SendToken> {
    if (!email || !password)
      throw new HttpException(
        'Please Enter Email And Password',
        HttpStatus.BAD_REQUEST,
      );

    const user = await this.model.findOne({ email }).select('+password');
    if (!user) throw new UnauthorizedException('Invalid Email or Password');

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid Email or Password');

    return sendToken(user);
  }
  // Logout Teacher
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

  // // Get Teacher Details
  async getTeacherDetails(user: any): Promise<any> {
    return {
      success: true,
      user,
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
  //       templateId: process.env.SENDGRID_RESET_TEMPLATEID,
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
  async getAllTeachers() {
    const users = await this.model.find();

    return {
      success: true,
      users,
    };
  }

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

  async findTeacherById(id: string) {
    return await this.model.findById(id);
  }
}

// const Teacher = require("../models/userModel");
// const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
// const sendToken = require("../utils/sendToken");
// const ErrorHandler = require("../utils/errorHandler");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");
// const cloudinary = require("cloudinary");
