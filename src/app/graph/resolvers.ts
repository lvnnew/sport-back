import {mergeResolvers, loadFilesSync} from 'graphql-tools';
import path from 'path';
import {resolvers} from 'graphql-scalars';

const resolversArray = loadFilesSync(path.join(__dirname, './*/resolvers.?(ts)?(js)'));

const mergedResolvers = mergeResolvers([resolvers, ...resolversArray]);

export default mergedResolvers;
