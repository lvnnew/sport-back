import {
  Resolvers,
  MutationNewManagerArgs,
  MutationDeactivateManagersArgs,
  MutationChangePasswordByManagerIdArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Mutation: {
    newManager: (_, params: MutationNewManagerArgs, {context}: {context: Context}) =>
      context.service('managers').newManager(params),
    deactivateManagers: (_, params: MutationDeactivateManagersArgs, {context}: {context: Context}) =>
      context.service('managers').deactivateManagers(params),
    changePasswordByManagerId: (_, params: MutationChangePasswordByManagerIdArgs, {context}: {context: Context}) =>
      context.service('managers').changePasswordByManagerId(params),
  },
};

export default queryResolvers;
