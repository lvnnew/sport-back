import {ManagersService} from './ManagersService';
import {beforeUpdate, beforeUpsertStrict, beforeDelete, changeListFilter} from './hooks/tenantIdRequiredHooks';

// DO NOT EDIT! THIS IS GENERATED FILE

const initBuiltInHooks = ({hooksAdd}: ManagersService) => {
  hooksAdd.beforeUpdate(beforeUpdate);
  hooksAdd.beforeUpsertStrict(beforeUpsertStrict);
  hooksAdd.beforeDelete(beforeDelete);
  hooksAdd.changeListFilter(changeListFilter);
};

export default initBuiltInHooks;
