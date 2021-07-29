import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeResolvers} from '@graphql-tools/merge';
import path from 'path';
import {resolvers} from 'graphql-scalars';

const resolversArray = loadFilesSync(path.join(__dirname, './services/*/resolvers.?(ts)?(js)'));
const resolversArrayPrjcts = loadFilesSync(path.join(__dirname, '../*/graph/services/*/*Resolvers.?(ts)?(js)'));

const mergedResolvers = mergeResolvers([resolvers, ...resolversArray, ...resolversArrayPrjcts]);

export default mergedResolvers;
