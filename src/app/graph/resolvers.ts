import {mergeResolvers} from '@graphql-tools/merge';
import {loadFilesSync} from '@graphql-tools/load-files';
import path from 'path';
import {resolvers} from 'graphql-scalars';
import {IResolvers} from '@graphql-tools/utils';

const resolversArray = loadFilesSync(path.join(__dirname, './*/resolvers.?(ts)?(js)'));

const mergedResolvers: IResolvers = mergeResolvers([resolvers, ...resolversArray]);

export default mergedResolvers;
