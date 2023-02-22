import {
  MutationSendEmailDebugArgs,
  Resolvers,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Mutation: {
    // sendEmail: (_, params: MutationSendEmailArgs, {context}: {context: Context}) =>
    //   context.service('sendingEmails').sendEmail(params),

    sendEmailDebug: (_, params: MutationSendEmailDebugArgs, {context}: {context: Context}) =>
      context.service('sendingEmails').sendEmailDebug(params),
  },
};

export default queryResolvers;
