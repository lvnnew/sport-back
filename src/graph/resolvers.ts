import {mergeResolvers} from '@graphql-tools/merge';
import {loadFilesSync} from '@graphql-tools/load-files';
import path from 'path';
import {resolvers} from 'graphql-scalars';
import {IResolvers} from '@graphql-tools/utils';

const resolversArrayPrjcts = [
  ...loadFilesSync(path.join(__dirname, '../*/graph/services/*/*Resolvers.?(ts)?(js)')),
  ...loadFilesSync(path.join(__dirname, '../*/graph/services/*/resolvers.?(ts)?(js)')),
];

const mergedResolvers: IResolvers = mergeResolvers([resolvers, ...resolversArrayPrjcts]);

export default mergedResolvers;
