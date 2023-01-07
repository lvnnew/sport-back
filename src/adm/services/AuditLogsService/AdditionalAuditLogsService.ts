import {AuditLogsService} from './AuditLogsService';
import {
  AuditLog,
} from '../../../generated/graphql';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import getSearchStringCreator from '../utils/getSearchStringCreator';

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

const dateFieldsForSearch: string[] = [
  'date',
];

const otherFieldsForSearch: string[] = [
  'id',
  'title',
  'entityTypeId',
  'entityId',
  'actionTypeId',
  'managerId',
  'userId',
  'foreignEntityType',
  'foreignEntityId',
  'actionData',
];

const getSearchString = getSearchStringCreator(dateFieldsForSearch, otherFieldsForSearch);

export class AdditionalAuditLogsService extends AuditLogsService {
  addOperation({
    entityTypeId,
    entityId,
    actionTypeId,
    title,
    actionData,
  }: AuditLogAddOperationArgs) {
    const data = {
      date: new Date(),
      title,
      entityTypeId,
      entityId: entityId.toString(),
      actionTypeId,
      actionData: JSON.stringify(actionData),
      managerId: this.ctx.service('profile').getManagerId(),
      userId: this.ctx.service('profile').getUserId(),
    };

    return this.ctx.prisma.auditLog.create({
      data: {
        ...data,
        search: getSearchString(data),
      },
    });
  }

  addCreateOperation({
    entityTypeId,
    entityId,
    actionData,
  }: AuditLogAddCreateOperationArgs) {
    return this.addOperation({
      entityTypeId,
      entityId,
      title: `${entityTypeId} create`,
      actionData,
      actionTypeId: AuditLogActionType.Create,
    });
  }

  addUpdateOperation({
    entityTypeId,
    entityId,
    actionData,
  }: AuditLogAddUpdataOperationArgs) {
    return this.addOperation({
      entityTypeId,
      entityId,
      title: `${entityTypeId} update`,
      actionData,
      actionTypeId: AuditLogActionType.Update,
    });
  }

  addDeleteOperation({
    entityTypeId,
    entityId,
  }: AuditLogAddDeleteOperationArgs) {
    return this.addOperation({
      entityTypeId,
      entityId,
      title: `${entityTypeId} delete`,
      actionTypeId: AuditLogActionType.Delete,
    });
  }
}
