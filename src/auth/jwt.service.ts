import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
  // constructor(
  //   @Inject(schemaConfigs.TEACHER_MODEL.toString())
  //   private teacherModel: Model<Teacher, {}>,
  //   private cloudinaryService: CloudinaryService,
  // ) {
  //   super(teacherModel);
  // }

  verify(accessToken) {
    return { sub: accessToken, pollID: accessToken, name: accessToken };
  }
}
