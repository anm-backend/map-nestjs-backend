export declare class QueryParam {
    page?: number;
    limit?: number;
    keyword?: string | null;
}
export declare class SearchFeatures {
    queryData: any;
    queryParam: QueryParam;
    constructor(queryData: any, queryParam: QueryParam);
    search(): this;
    filter(): this;
    pagination(limit?: number): this;
}
