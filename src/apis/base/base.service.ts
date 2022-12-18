import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { ErrorHandler } from 'src/utils/errorHandler';
import { QueryParam, SearchFeatures } from 'src/utils/searchFeatures';

@Injectable({})
export class BaseService<T, Dto> {
  public SearchFeatures = SearchFeatures;
  public QueryParam = QueryParam;

  constructor(public model: Model<T>) {}

  // async createOrUpdate(createSchoolDto: Dto, id: string = null): Promise<any> {
  //   if (id === null) {
  //     const created = new this.model(createSchoolDto);
  //     return created.save();
  //   }
  //   return this.model
  //     .findByIdAndUpdate(id, createSchoolDto, { new: true })
  //     .exec();
  // }

  // async findAllOrOne(
  //   id: string = null,
  //   query: QueryParam = null,
  // ): Promise<T[] | T | any> {
  //   try {
  //     if (id !== null) return this.model.findById(id).exec();

  //     const schoolsCount = await this.model.countDocuments();
  //     const queryData = this.model.find();

  //     const searchFeature = new SearchFeatures(queryData, query)
  //       .search()
  //       .filter();

  //     let datas = await searchFeature.queryData;
  //     let filteredSchoolsCount = datas.length;

  //     searchFeature.pagination(query.limit || 12);

  //     datas = await searchFeature.queryData.clone();

  //     return {
  //       success: true,
  //       datas,
  //       schoolsCount,
  //       limit: searchFeature.queryParam.limit,
  //       filteredSchoolsCount,
  //     };
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // async remove(id: string): Promise<T> {
  //   return this.model.findByIdAndRemove(id).exec();
  // }
}
