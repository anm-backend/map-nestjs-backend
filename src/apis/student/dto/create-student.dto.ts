// https://viblo.asia/p/framework-nestjs-exception-filters-bWrZn7qrlxw
// https://liashchynskyi.net/posts/nestjs-custom-relationship-validator
// https://wanago.io/2021/08/30/api-nestjs-virtual-properties-mongodb-mongoose/
// https://docs.nestjs.com/techniques/validation
// https://docs.nestjs.com/custom-decorators
// https://www.prisma.io/blog/nestjs-prisma-validation-7D056s1kOla1
// https://www.google.com/search?q=nestjs+validation&oq=nestjs+validation&aqs=chrome..69i57j0i22i30l6j69i61.8039j0j7&sourceid=chrome&ie=UTF-8
// https://docs.nestjs.com/fundamentals/execution-context
// https://www.linkedin.com/pulse/nestjs-exception-filters-part-02-udara-abeythilake/?trk=pulse-article_more-articles_related-content-card
// https://www.linkedin.com/pulse/nestjs-pipes-part-03-udara-abeythilake/
// https://www.linkedin.com/pulse/http-status-codes-udara-abeythilake/
// https://www.linkedin.com/pulse/nodejs-architecture-udara-abeythilake/
// https://stackoverflow.com/questions/62829097/reading-the-response-in-case-of-exception-in-exception-filter
// https://www.prisma.io/blog/nestjs-prisma-error-handling-7D056s1kOop2
// https://docs.nestjs.com/exception-filters
// https://www.programcreek.com/typescript/?api=@nestjs/common.ArgumentsHost
// https://stackoverflow.com/questions/66395079/nestjs-and-mongoose-find-by-reference-object-id
// https://stackoverflow.com/questions/27482806/check-if-id-exists-in-a-collection-with-mongoose
// nestjs mongoose check unique id

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Student } from '../schemas/student.schema';

export class CreateStudentDto implements Student {
  @IsString({ message: 'Mã sinh viên sai định dạng' })
  @IsNotEmpty({ message: 'Mã sinh viên không được bỏ trống' })
  @ApiProperty()
  identityCode: string;

  @IsString({ message: 'Tên sai định dạng' })
  @IsNotEmpty({ message: 'Tên không được bỏ trống' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'Lớp sai định dạng' })
  @IsNotEmpty({ message: 'Lớp không được bỏ trống' })
  @ApiProperty()
  classStudy: string;
}
