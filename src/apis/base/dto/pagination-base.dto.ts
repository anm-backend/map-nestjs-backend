import { ApiProperty } from '@nestjs/swagger';

export class PaginationBaseDto {
  constructor(page: number, limit: number) {
    this.page = page;
    this.limit = limit;
  }

  @ApiProperty({ default: 1, required: false })
  page: number;

  @ApiProperty({ default: 5, required: false })
  limit: number;
}
