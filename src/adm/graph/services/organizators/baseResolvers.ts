import {
  QueryAllOrganizatorsArgs,
  Query_AllOrganizatorsMetaArgs,
  Resolvers,
  MutationCreateOrganizatorArgs,
  MutationUpdateOrganizatorArgs,
  MutationRemoveOrganizatorArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Organizator: (_, {id}, {context}: {context: Context}) =>
      context.service('organizators').get(id, true),
    allOrganizators:
      (_, params: QueryAllOrganizatorsArgs, {context}: {context: Context}) =>
        context.service('organizators').all(params, true),
    _allOrganizatorsMeta:
      (_, params: Query_AllOrganizatorsMetaArgs, {context}: {context: Context}) =>
        context.service('organizators').meta(params, true),
  },
  Mutation: {
    createOrganizator:
      (_, params: MutationCreateOrganizatorArgs, {context}: {context: Context}) =>
        context.service('organizators').create(params, true),
    updateOrganizator:
      (_, params: MutationUpdateOrganizatorArgs, {context}: {context: Context}) =>
        context.service('organizators').update(params, true),
    removeOrganizator:
      (_, params: MutationRemoveOrganizatorArgs, {context}: {context: Context}) =>
        context.service('organizators').delete(params, true),
  },
};

export default queryResolvers;
