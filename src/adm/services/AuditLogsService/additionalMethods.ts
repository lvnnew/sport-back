import {AuditLog} from '../../../generated/graphql';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {Context} from '../types';
import {BaseAuditLogsMethods} from './AuditLogsService';

export interface AuditLogAddOperationArgs {
  entityTypeId: Entity,
  entityId: string | number,
  actionTypeId: AuditLogActionType,
  title: string,
  actionData?: Record<string, any>,
}

export interface AuditLogAddCreateOperationArgs {
  entityTypeId: Entity,
  entityId: string | number,
  actionData?: Record<string, any>,
}

export interface AuditLogAddUpdataOperationArgs extends AuditLogAddCreateOperationArgs {}

export interface AuditLogAddDeleteOperationArgs {
  entityTypeId: Entity,
  entityId: string | number,
}

export interface AdditionalAuditLogsMethods {
  addOperation: (args: AuditLogAddOperationArgs) => Promise<AuditLog>;
  addCreateOperation: (args: AuditLogAddCreateOperationArgs) => Promise<AuditLog>;
  addUpdateOperation: (args: AuditLogAddUpdataOperationArgs) => Promise<AuditLog>;
  addDeleteOperation: (args: AuditLogAddDeleteOperationArgs) => Promise<AuditLog>;
}

export const getAdditionalMethods = (ctx: Context, _baseMethods: BaseAuditLogsMethods): AdditionalAuditLogsMethods => {
  const addOperation = ({
    entityTypeId,
    entityId,
    actionTypeId,
    title,
    actionData,
  }: AuditLogAddOperationArgs) => ctx.prisma.auditLog.create({
    data: {
      date: new Date(),
      title,
      entityTypeId,
      entityId: entityId.toString(),
      actionTypeId,
      actionData: JSON.stringify(actionData),
      managerId: ctx.service('profile').getManagerId(),
      userId: ctx.service('profile').getUserId(),
    },
  });

  const addCreateOperation = ({
    entityTypeId,
    entityId,
    actionData,
  }: AuditLogAddCreateOperationArgs) => addOperation({
    entityTypeId,
    entityId,
    title: `${entityTypeId} create`,
    actionData,
    actionTypeId: AuditLogActionType.Create,
  });

  const addUpdateOperation = ({
    entityTypeId,
    entityId,
    actionData,
  }: AuditLogAddUpdataOperationArgs) => addOperation({
    entityTypeId,
    entityId,
    title: `${entityTypeId} update`,
    actionData,
    actionTypeId: AuditLogActionType.Update,
  });

  const addDeleteOperation = ({
    entityTypeId,
    entityId,
  }: AuditLogAddDeleteOperationArgs) => addOperation({
    entityTypeId,
    entityId,
    title: `${entityTypeId} delete`,
    actionTypeId: AuditLogActionType.Delete,
  });

  return {
    addOperation,
    addCreateOperation,
    addUpdateOperation,
    addDeleteOperation,
  };
};

