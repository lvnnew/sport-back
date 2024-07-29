import {
  QueryAllParentsArgs,
  Query_AllParentsMetaArgs,
  Resolvers,
  MutationCreateParentArgs,
  MutationUpdateParentArgs,
  MutationRemoveParentArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Parent: (_, {id}, {context}: {context: Context}) =>
      context.service('parents').get(id, true),
    allParents:
      (_, params: QueryAllParentsArgs, {context}: {context: Context}) =>
        context.service('parents').all(params, true),
    _allParentsMeta:
      (_, params: Query_AllParentsMetaArgs, {context}: {context: Context}) =>
        context.service('parents').meta(params, true),
  },
  Mutation: {
    createParent:
      (_, params: MutationCreateParentArgs, {context}: {context: Context}) =>
        context.service('parents').create(params, true),
    updateParent:
      (_, params: MutationUpdateParentArgs, {context}: {context: Context}) =>
        context.service('parents').update(params, true),
    removeParent:
      (_, params: MutationRemoveParentArgs, {context}: {context: Context}) =>
        context.service('parents').delete(params, true),
  },
};

export default queryResolvers;
