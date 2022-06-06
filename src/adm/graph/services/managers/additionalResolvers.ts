import {
  Resolvers,
  MutationNewManagerArgs,
  MutationDeactivateManagersArgs,
  MutationChangePasswordArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Mutation: {
    newManager: (_, params: MutationNewManagerArgs, {context}: {context: Context}) =>
      context.service('managers').newManager(params),
    deactivateManagers: (_, params: MutationDeactivateManagersArgs, {context}: {context: Context}) =>
      context.service('managers').deactivateManagers(params),
    changePassword: (_, params: MutationChangePasswordArgs, {context}: {context: Context}) =>
      context.service('managers').changePassword(params),
  },
};

export default queryResolvers;
