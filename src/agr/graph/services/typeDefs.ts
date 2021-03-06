import {loadFilesSync} from 'graphql-tools';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './*/typeDefs.?(ts)?(js)'));

export default typesArray;
