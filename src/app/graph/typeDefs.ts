import {mergeTypeDefs, loadFilesSync} from 'graphql-tools';
import path from 'path';
import {typeDefs} from 'graphql-scalars';

const typesArray = loadFilesSync(path.join(__dirname, './*/typeDefs.?(ts)?(js)'));

const mergedTypeDefs = mergeTypeDefs([...typeDefs, ...typesArray]);

export default mergedTypeDefs;
