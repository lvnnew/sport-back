import {mergeTypeDefs, loadFilesSync} from 'graphql-tools';
import path from 'path';
import {typeDefs} from 'graphql-scalars';

const typesArray = loadFilesSync(path.join(__dirname, './services/*/typeDefs.?(ts)?(js)'));
const typesArrayPrjcts = loadFilesSync(path.join(__dirname, '../*/graph/services/*/*TypeDefs.?(ts)?(js)'));

const mergedTypeDefs = mergeTypeDefs([...typeDefs, ...typesArray, ...typesArrayPrjcts]);

export default mergedTypeDefs;
