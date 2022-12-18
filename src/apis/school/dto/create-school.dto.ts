import { School } from '../schemas/school.schema';

export class CreateSchoolDto extends School {
  // set stock(value): Number{
  //   this.stock = value;
  // }
  specifications: any;
}
