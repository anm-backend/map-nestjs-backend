import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';
export declare class GraphqlsService {
    create(createGraphqlInput: CreateGraphqlInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGraphqlInput: UpdateGraphqlInput): string;
    remove(id: number): string;
}
