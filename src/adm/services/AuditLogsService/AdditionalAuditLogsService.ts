import {AuditLogsService} from './AuditLogsService';
import {
  AuditLog as GenAuditLog,
} from '../../../generated/graphql';
import AuditLogActionType from '../../../types/AuditLogActionType';
import Entity from '../../../types/Entity';
import {PrismaPromise} from '@prisma/client';

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

export interface AuditLogAddUpdataOperationArgs extends AuditLogAddCreateOperationArgs { }

export interface AuditLogAddDeleteOperationArgs {
  entityTypeId: Entity,
  entityId: string | number,
  actionData?: Record<string, any>,
}

interface AuditLog extends GenAuditLog {
  // todo: since graphQL does not know about json type, this is a temporary error fix
  actionData: any;
}

export interface AdditionalAuditLogsMethods {
  addOperation: (args: AuditLogAddOperationArgs) => Promise<AuditLog>;
  addCreateOperation: (args: AuditLogAddCreateOperationArgs) => Promise<AuditLog>;
  addUpdateOperation: (args: AuditLogAddUpdataOperationArgs) => Promise<AuditLog>;
  addDeleteOperation: (args: AuditLogAddDeleteOperationArgs) => Promise<AuditLog>;
}

export class AdditionalAuditLogsService extends AuditLogsService implements AdditionalAuditLogsMethods {
  addOperation({
    entityTypeId,
    entityId,
    actionTypeId,
    title,
    actionData,
  }: AuditLogAddOperationArgs): PrismaPromise<AuditLog> {
    const data = {
      date: new Date(),
      title,
      entityTypeId,
      entityId: entityId.toString(),
      actionTypeId,
      actionData: JSON.stringify(actionData),
      managerId: this.ctx.service('profile').getManagerId(),
      managerLogin: this.ctx.service('profile').getManagerLogin(),
      unitName: this.ctx.service('profile').getUnitName(),
    };

    return this.ctx.prisma.auditLog.create({
      data: {
        ...data,
        search: this.getSearchString(data),
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
    actionData,
  }: AuditLogAddDeleteOperationArgs) {
    return this.addOperation({
      entityTypeId,
      entityId,
      title: `${entityTypeId} delete`,
      actionData,
      actionTypeId: AuditLogActionType.Delete,
    });
  }
}
