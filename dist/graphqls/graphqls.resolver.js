"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphqls_service_1 = require("./graphqls.service");
const graphql_entity_1 = require("./entities/graphql.entity");
const create_graphql_input_1 = require("./dto/create-graphql.input");
const update_graphql_input_1 = require("./dto/update-graphql.input");
let GraphqlsResolver = class GraphqlsResolver {
    constructor(graphqlsService) {
        this.graphqlsService = graphqlsService;
    }
    createGraphql(createGraphqlInput) {
        return this.graphqlsService.create(createGraphqlInput);
    }
    findAll() {
        return this.graphqlsService.findAll();
    }
    findOne(id) {
        return this.graphqlsService.findOne(id);
    }
    updateGraphql(updateGraphqlInput) {
        return this.graphqlsService.update(updateGraphqlInput.id, updateGraphqlInput);
    }
    removeGraphql(id) {
        return this.graphqlsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => graphql_entity_1.Graphql),
    __param(0, (0, graphql_1.Args)('createGraphqlInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_graphql_input_1.CreateGraphqlInput]),
    __metadata("design:returntype", void 0)
], GraphqlsResolver.prototype, "createGraphql", null);
__decorate([
    (0, graphql_1.Query)(() => [graphql_entity_1.Graphql], { name: 'graphqls' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GraphqlsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_entity_1.Graphql, { name: 'graphql' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GraphqlsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => graphql_entity_1.Graphql),
    __param(0, (0, graphql_1.Args)('updateGraphqlInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_graphql_input_1.UpdateGraphqlInput]),
    __metadata("design:returntype", void 0)
], GraphqlsResolver.prototype, "updateGraphql", null);
__decorate([
    (0, graphql_1.Mutation)(() => graphql_entity_1.Graphql),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GraphqlsResolver.prototype, "removeGraphql", null);
GraphqlsResolver = __decorate([
    (0, graphql_1.Resolver)(() => graphql_entity_1.Graphql),
    __metadata("design:paramtypes", [graphqls_service_1.GraphqlsService])
], GraphqlsResolver);
exports.GraphqlsResolver = GraphqlsResolver;
//# sourceMappingURL=graphqls.resolver.js.map