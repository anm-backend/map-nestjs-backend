export class QueryParam {
  // public query?: string;
  // public filter?: string;
  // public sort?: string;
  public page?: number;
  public limit?: number;
  public keyword?: string | null = null;
}

export class SearchFeatures {
  constructor(public queryData: any, public queryParam: QueryParam) {}

  search() {
    const keyword = this.queryParam.keyword
      ? {
          name: {
            $regex: this.queryParam.keyword,
            $options: 'i',
          },
        }
      : {};

    this.queryData = this.queryData.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryParam };

    // fields to remove for category
    const removeFields = ['keyword', 'page', 'limit'];

    // console.log(queryCopy);
    removeFields.forEach((key) => delete queryCopy[key]);
    // console.log(queryCopy);

    // price filter
    let queryParam = JSON.stringify(queryCopy);
    queryParam = queryParam.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    // console.log(JSON.parse(queryParam));

    this.queryData = this.queryData.find(JSON.parse(queryParam));
    return this;
  }

  pagination(limit: number = 12) {
    this.queryParam.limit = limit;

    const currentPage = Number(this.queryParam.page) || 1;

    const skipSchools = this.queryParam.limit * (currentPage - 1);

    this.queryData = this.queryData
      .limit(this.queryParam.limit)
      .skip(skipSchools);
    return this;
  }
}
