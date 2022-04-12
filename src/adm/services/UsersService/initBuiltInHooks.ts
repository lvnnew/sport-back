import {UsersService} from './UsersService';
import {beforeUpdate, beforeUpsertStrict, beforeDelete, changeListFilter} from './hooks/tenantIdRequiredHooks';

// DO NOT EDIT! THIS IS GENERATED FILE

const initBuiltInHooks = ({hooksAdd}: UsersService) => {
  hooksAdd.beforeUpdate(beforeUpdate);
  hooksAdd.beforeUpsertStrict(beforeUpsertStrict);
  hooksAdd.beforeDelete(beforeDelete);
  hooksAdd.changeListFilter(changeListFilter);
};

export default initBuiltInHooks;
