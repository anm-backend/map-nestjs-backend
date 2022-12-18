"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFeatures = exports.QueryParam = void 0;
class QueryParam {
    constructor() {
        this.keyword = null;
    }
}
exports.QueryParam = QueryParam;
class SearchFeatures {
    constructor(queryData, queryParam) {
        this.queryData = queryData;
        this.queryParam = queryParam;
    }
    search() {
        const keyword = this.queryParam.keyword
            ? {
                name: {
                    $regex: this.queryParam.keyword,
                    $options: 'i',
                },
            }
            : {};
        this.queryData = this.queryData.find(Object.assign({}, keyword));
        return this;
    }
    filter() {
        const queryCopy = Object.assign({}, this.queryParam);
        const removeFields = ['keyword', 'page', 'limit'];
        removeFields.forEach((key) => delete queryCopy[key]);
        let queryParam = JSON.stringify(queryCopy);
        queryParam = queryParam.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        this.queryData = this.queryData.find(JSON.parse(queryParam));
        return this;
    }
    pagination(limit = 12) {
        this.queryParam.limit = limit;
        const currentPage = Number(this.queryParam.page) || 1;
        const skipSchools = this.queryParam.limit * (currentPage - 1);
        this.queryData = this.queryData
            .limit(this.queryParam.limit)
            .skip(skipSchools);
        return this;
    }
}
exports.SearchFeatures = SearchFeatures;
//# sourceMappingURL=searchFeatures.js.map