import * as Method from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiBasicAuth, ApiBearerAuth, ApiProperty, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PrefixController } from '../base/base.routes';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Role } from 'src/auth/entities/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { SendToken } from 'src/utils/sendToken';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';

@ApiTags('Teacher')
@PrefixController('teacher')
@ApiSecurity('basic')
@ApiBasicAuth()
@ApiBearerAuth()
export class TeacherController {
  constructor(private readonly userService: TeacherService) {}

  @Method.Post('/register')
  @Method.UseInterceptors(FileInterceptor('image'))
  registerTeacher(
    @UploadedFile() image: Express.Multer.File,
    // @Method.Body(SETTINGS.VALIDATION_PIPE) createTeacherDto: CreateTeacherDto,
    @Method.Body() createTeacherDto: CreateTeacherDto,
  ): Promise<SendToken> {
    return this.userService.registerTeacher(image, createTeacherDto);
  }
  @Method.Post('/login')
  login(@Method.Body() loginTeacher: RequestLoginTeacherDto) {
    return this.userService.loginTeacher(loginTeacher);
  }

  @Method.Get('/logout')
  logoutTeacher() {
    // return this.userService.findAll();
  }

  @Method.Get('/me')
  @UseGuards(JwtAuthGuard)
  getTeacherDetails(@Method.Request() req: any): any {
    return this.userService.getTeacherDetails(req.user);
  }

  @Method.Post('/password/forgot')
  forgotPassword(
    @Method.Param('id') id: string,
    @Method.Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    // return this.userService.update(+id, updateTeacherDto);
  }

  @Method.Put('/password/reset/:token')
  resetPassword(
    @Method.Param('id') id: string,
    @Method.Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    // return this.userService.update(+id, updateTeacherDto);
  }

  @Method.Put('/password/update')
  @UseGuards(JwtAuthGuard)
  updatePassword(
    @Method.Param('id') id: string,
    @Method.Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    // return this.userService.update(+id, updateTeacherDto);
  }

  @Method.Put('/me/update')
  @UseGuards(JwtAuthGuard)
  updateProfile(
    @Method.Param('id') id: string,
    @Method.Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    // return this.userService.update(+id, updateTeacherDto);
  }

  @Method.Get('/list')
  // @UseGuards(JwtAuthGuard)
  // @Roles(Role.ADMIN)
  getAllTeachers() {
    return this.userService.getAllTeachers();
  }

  @Method.Get('/admin/user/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  getSingleTeacher(@Method.Param('id') id: string) {
    // return this.userService.remove(+id);
  }

  @Method.Put('/admin/user/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  updateTeacherRole(@Method.Param('id') id: string) {
    // return this.userService.remove(+id);
  }

  @Method.Delete('/admin/user/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  deleteTeacher(@Method.Param('id') id: string) {
    // return this.userService.remove(+id);
  }
}
