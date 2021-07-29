import {mergeTypeDefs} from '@graphql-tools/merge';
import {loadFilesSync} from '@graphql-tools/load-files';
import path from 'path';
import {typeDefs} from 'graphql-scalars';
import {log} from '../log';

const typesArrayPrjcts = loadFilesSync(
  path.join(__dirname, '../*/graph/services/*/*TypeDefs.?(ts)?(js)'),
).filter(s => s.kind && s.kind === 'Document');

log.info('!!!!!!!');
log.info(typesArrayPrjcts.map(t => typeof t));
log.info(Object.keys(typesArrayPrjcts[0]));
log.info(typesArrayPrjcts.map(t => Object.keys(t)));

// log.info(typesArrayPrjcts.map(t => typeof t));
log.info(typesArrayPrjcts[0]);
log.info(typesArrayPrjcts[1]);

// log.info(Object.keys(typesArrayPrjcts));

const mergedTypeDefs = mergeTypeDefs([...typeDefs, ...typesArrayPrjcts]);

export default mergedTypeDefs;
