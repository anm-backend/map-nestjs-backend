import { GraphqlsService } from './graphqls.service';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';
export declare class GraphqlsResolver {
    private readonly graphqlsService;
    constructor(graphqlsService: GraphqlsService);
    createGraphql(createGraphqlInput: CreateGraphqlInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateGraphql(updateGraphqlInput: UpdateGraphqlInput): string;
    removeGraphql(id: number): string;
}
