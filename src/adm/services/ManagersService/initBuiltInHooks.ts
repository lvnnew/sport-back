import {ManagersService} from './ManagersService';
import {beforeUpdate, beforeUpsert, beforeDelete, changeListFilter} from './hooks/tenantIdRequiredHooks';

// DO NOT EDIT! THIS IS GENERATED FILE

const initBuiltInHooks = ({hooksAdd}: ManagersService) => {
  hooksAdd.beforeUpdate(beforeUpdate);
  hooksAdd.beforeUpsert(beforeUpsert);
  hooksAdd.beforeDelete(beforeDelete);
  hooksAdd.changeListFilter(changeListFilter);
};

export default initBuiltInHooks;
