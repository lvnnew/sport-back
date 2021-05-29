import {mergeTypeDefs, loadFilesSync} from 'graphql-tools';
import path from 'path';
import {typeDefs} from 'graphql-scalars';

const typesArrayPrjcts = loadFilesSync(path.join(__dirname, '../*/graph/services/*/*TypeDefs.?(ts)?(js)'));

const mergedTypeDefs = mergeTypeDefs([...typeDefs, ...typesArrayPrjcts]);

export default mergedTypeDefs;
