import { Model } from 'mongoose';
import { QueryParam, SearchFeatures } from 'src/utils/searchFeatures';
export declare class BaseService<T, Dto> {
    model: Model<T>;
    SearchFeatures: typeof SearchFeatures;
    QueryParam: typeof QueryParam;
    constructor(model: Model<T>);
}
