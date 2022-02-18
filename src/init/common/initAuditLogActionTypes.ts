import {Context} from '../../adm/services/types';
import AuditLogActionType from '../../types/AuditLogActionType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initAuditLogActionTypes = async (ctx: Context) => {
  await ctx.service('auditLogActionTypes').upsert({
    id: AuditLogActionType.Create,
    title: 'Создание сущности',
  });
  await ctx.service('auditLogActionTypes').upsert({
    id: AuditLogActionType.Update,
    title: 'Изменение сущности',
  });
  await ctx.service('auditLogActionTypes').upsert({
    id: AuditLogActionType.Delete,
    title: 'Удаление сущности',
  });
};

export default initAuditLogActionTypes;
