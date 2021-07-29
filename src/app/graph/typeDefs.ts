import {mergeTypeDefs} from '@graphql-tools/merge';
import {loadFilesSync} from '@graphql-tools/load-files';
import path from 'path';
import {typeDefs} from 'graphql-scalars';

const typesArray = loadFilesSync(path.join(__dirname, './*/typeDefs.?(ts)?(js)'));

const mergedTypeDefs = mergeTypeDefs([...typeDefs, ...typesArray]);

// Заявки на восстановление перелетов (+добавление) flightRecoveryRequestDocument
// Заявки на повышение класса (+добавление) upgradeRequestDocument
// Заявки на бонусные билеты (+добавление) flightForMilesRequestDocument
// Список активностей transactions
// Калькуляторы calculators
// Изменение пароля profile

export default mergedTypeDefs;
