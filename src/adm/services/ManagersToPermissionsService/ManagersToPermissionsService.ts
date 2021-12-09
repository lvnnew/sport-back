import {
  ListMetadata,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
  QueryAllManagersToPermissionsArgs,
  Query_AllManagersToPermissionsMetaArgs,
  ManagersToPermission,
  ManagersToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
import {additionalOperationsOnCreate} from './hooks/additionalOperationsOnCreate';
import {additionalOperationsOnUpdate} from './hooks/additionalOperationsOnUpdate';
import {additionalOperationsOnDelete} from './hooks/additionalOperationsOnDelete';
import {beforeCreate} from './hooks/beforeCreate';
import {beforeUpdate} from './hooks/beforeUpdate';
import {afterCreate} from './hooks/afterCreate';
import {afterUpdate} from './hooks/afterUpdate';
import {afterDelete} from './hooks/afterDelete';
import * as R from 'ramda';

// DO NOT EDIT! THIS IS GENERATED FILE

export interface BaseManagersToPermissionsMethods {
  get: (id: number) =>
    Promise<ManagersToPermission | null>;
  all: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission[]>;
  findOne: (params?: QueryAllManagersToPermissionsArgs) =>
    Promise<ManagersToPermission | null>;
  count: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllManagersToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  createMany: (data: MutationCreateManagersToPermissionArgs[], byUser?: boolean) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsert: (data: MutationUpdateManagersToPermissionArgs, byUser?: boolean) =>
    Promise<ManagersToPermission>;
  upsertAdvanced: (
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser?: boolean,
  ) =>
    Promise<ManagersToPermission>;
  delete: (params: MutationRemoveManagersToPermissionArgs) =>
    Promise<ManagersToPermission>;
}

export type ManagersToPermissionsService = BaseManagersToPermissionsMethods & AdditionalManagersToPermissionsMethods;

export const getManagersToPermissionsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<ManagersToPermission | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToPermission.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToPermission.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<ManagersToPermission[]>;
  };

  const findOne = async (
    params: QueryAllManagersToPermissionsArgs = {},
  ): Promise<ManagersToPermission | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToPermission.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToPermission.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllManagersToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = data;

    if (byUser) {
      processedData = R.mergeDeepLeft(
        {},
        processedData,
      );
    }

    processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.managersToPermission.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    // update search. earlier we does not have id
    await getCtx().prisma.managersToPermission.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
                'permissionId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as ManagersToPermission);

    return result as ManagersToPermission;
  };

  const createMany = async (
    entries: MutationCreateManagersToPermissionArgs[],
    byUser = false,
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = entries;

    if (byUser) {
      processedData = processedData.map(data => R.mergeDeepLeft(
        {},
        data,
      ));
    }

    const result = await getCtx().prisma.managersToPermission.createMany({
      data: processedData.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
                ], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedData = data;

    if (byUser) {
      processedData = R.omit(
        [],
        processedData,
      );
    }

    processedData = await beforeUpdate(getCtx, processedData);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.managersToPermission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'managerId',
                  'permissionId',
                ], processedData),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
          ].join(' '),
        },
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);
    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterUpdate(getCtx, result as ManagersToPermission);

    return result as ManagersToPermission;
  };

  const upsert = async (
    data: MutationUpdateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [],
        processedDataToUpdate,
      );
    }

    const result = await getCtx().prisma.managersToPermission.upsert({create: R.mergeDeepLeft(
      processedDataToCreate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
                'permissionId',
              ], processedDataToCreate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      processedDataToUpdate,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'managerId',
                'permissionId',
              ], processedDataToUpdate),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id: data.id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: ManagersToPermissionFilter,
    data: MutationCreateManagersToPermissionArgs,
    byUser = false,
  ): Promise<ManagersToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    let processedDataToCreate = data;
    let processedDataToUpdate = data;

    if (byUser) {
      processedDataToCreate = R.mergeDeepLeft(
        {},
        processedDataToCreate,
      );

      processedDataToUpdate = R.omit(
        [],
        processedDataToUpdate,
      );
    }

    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (cnt === 0) {
      return create(processedDataToCreate, false);
    } else {
      const current = await findOne({filter});

      if (!current) {
        return create(processedDataToCreate, false);
      }

      return update({
        ...processedDataToUpdate,
        id: current.id,
      },
      false);
    }
  };

  const del = async (
    params: MutationRemoveManagersToPermissionArgs,
  ): Promise<ManagersToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.managersToPermission.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
      ...(await additionalOperationsOnDelete(getCtx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await getCtx().prisma.$transaction(operations as any);

    if (!result) {
      throw new Error('There is no such entity');
    }

    await afterDelete(getCtx, entity);

    return entity;
  };

  const baseMethods: BaseManagersToPermissionsMethods = {
    get,
    all,
    findOne,
    count,
    meta,
    create,
    createMany,
    update,
    upsert,
    upsertAdvanced,
    delete: del,
  };

  const additionalMethods = getAdditionalMethods(getCtx, baseMethods);

  return {
    ...baseMethods,
    ...additionalMethods,
  };
};
