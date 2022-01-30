import {Context} from '../../adm/services/types';
import AuditLogActionType from '../../types/AuditLogActionType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initAuditLogActionTypes = async (ctx: Context) => {
  await ctx.service('auditLogActionTypes').upsert({
    id: AuditLogActionType.NewEntityData,
    title: 'Новые данные сущности',
  });
};

export default initAuditLogActionTypes;
