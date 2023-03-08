import * as Method from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  // ApiProperty,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PrefixController } from '../base/base.routes';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  HttpCode,
  HttpStatus,
  // UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Role } from 'src/auth/entities/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
// import { SendToken } from 'src/utils/sendToken';
import { RequestLoginTeacherDto } from './dto/_req.login-teacher.dto';
import { RequestRegisterTeacherDto } from './dto/_req.register-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { ResponseListTeacherDto } from './dto/_res.list-teacher.dto';
import { PaginationBaseDto } from '../base/dto/pagination-base.dto';
// import { PublicTransaction } from 'src/auth/public.transaction';
// import { LoginResult } from './types/login.type';

@ApiTags('Teacher')
@PrefixController('teacher')
@ApiBearerAuth()
export class TeacherController {
  constructor(private readonly userService: TeacherService) {}

  // AUTH
  @Method.Post('/register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Method.UseInterceptors(FileInterceptor('image'))
  register(
    // @UploadedFile() image: Express.Multer.File,
    // @Method.Body(SETTINGS.VALIDATION_PIPE) createTeacherDto: CreateTeacherDto,
    @Method.Body() requestRegisterTeacherDto: RequestRegisterTeacherDto,
  ) {
    return this.userService.register(requestRegisterTeacherDto);
  }
  // @PublicTransaction()
  @Method.Post('/login')
  @HttpCode(HttpStatus.OK)
  login(@Method.Body() loginTeacher: RequestLoginTeacherDto) {
    return this.userService.login(loginTeacher);
  }
  // @Method.Get('/logout')
  // logout() {
  //   // return this.userService.findAll();
  // }

  // // PASSWORD
  // @Method.Post('/password/forgot')
  // forgotPassword(
  //   @Method.Param('id') id: string,
  //   @Method.Body() updateTeacherDto: UpdateTeacherDto,
  // ) {
  //   // return this.userService.update(+id, updateTeacherDto);
  // }
  // @Method.Put('/password/reset/:token')
  // resetPassword(
  //   @Method.Param('id') id: string,
  //   @Method.Body() updateTeacherDto: UpdateTeacherDto,
  // ) {
  //   // return this.userService.update(+id, updateTeacherDto);
  // }
  // @Method.Put('/password/update')
  // @UseGuards(JwtAuthGuard)
  // updatePassword(
  //   @Method.Param('id') id: string,
  //   @Method.Body() updateTeacherDto: UpdateTeacherDto,
  // ) {
  //   // return this.userService.update(+id, updateTeacherDto);
  // }

  // PROFILE
  @Method.Get('/me')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getProfile(@Method.Request() req: any): any {
    return this.userService.getDetailById(req.user);
  }
  @Method.Put('/me/update')
  @UseGuards(JwtAuthGuard)
  updateProfile(
    @Method.Param('id') id: string,
    @Method.Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    // return this.userService.update(+id, updateTeacherDto);
  }

  // TEACHER
  @Method.Get('/list')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  // @ApiQuery({ type: PaginationBaseDto })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Number of pages',
    example: '1',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Number of response record',
    example: '5',
  })
  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
    description: 'Search data by key',
    example: '{"name": "some one"}',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ResponseListTeacherDto })
  getAll(
    @Method.Query('page', new Method.DefaultValuePipe(1), Method.ParseIntPipe)
    page: number = 1,
    @Method.Query('limit', new Method.DefaultValuePipe(5), Method.ParseIntPipe)
    limit: number = 5,
    @Method.Query('search', new Method.DefaultValuePipe(''))
    search: string = '',
  ): Promise<ResponseListTeacherDto> {
    return this.userService.getAll(new PaginationBaseDto(page, limit), search);
  }
  // @Method.Get('/:id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // getDetailById(@Method.Param('id') id: string) {
  //   // return this.userService.remove(+id);
  // }
  // @Method.Put('/:id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // updateById(@Method.Param('id') id: string) {
  //   // return this.userService.remove(+id);
  // }
  // @Method.Delete('/:id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  // deleteById(@Method.Param('id') id: string) {
  //   // return this.userService.remove(+id);
  // }
}
