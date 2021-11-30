import {
  ListMetadata,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
  QueryAllRolesToPermissionsArgs,
  Query_AllRolesToPermissionsMetaArgs,
  RolesToPermission,
  RolesToPermissionFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalRolesToPermissionsMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseRolesToPermissionsMethods {
  get: (id: number) =>
    Promise<RolesToPermission | null>;
  all: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission[]>;
  findOne: (params?: QueryAllRolesToPermissionsArgs) =>
    Promise<RolesToPermission | null>;
  count: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllRolesToPermissionsMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
  createMany: (data: MutationCreateRolesToPermissionArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
  upsert: (data: MutationUpdateRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
  upsertAdvanced: (
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgs,
  ) =>
    Promise<RolesToPermission>;
  delete: (params: MutationRemoveRolesToPermissionArgs) =>
    Promise<RolesToPermission>;
}

export type RolesToPermissionsService = BaseRolesToPermissionsMethods & AdditionalRolesToPermissionsMethods;

export const getRolesToPermissionsService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<RolesToPermission | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.rolesToPermission.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.rolesToPermission.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<RolesToPermission[]>;
  };

  const findOne = async (
    params: QueryAllRolesToPermissionsArgs = {},
  ): Promise<RolesToPermission | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.rolesToPermission.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.rolesToPermission.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllRolesToPermissionsMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.rolesToPermission.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
                  'permissionId',
                ], data),
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
    await getCtx().prisma.rolesToPermission.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'roleId',
                'permissionId',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as RolesToPermission);

    return result as RolesToPermission;
  };

  const createMany = async (
    entries: MutationCreateRolesToPermissionArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.rolesToPermission.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
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
    data: MutationUpdateRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.rolesToPermission.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'roleId',
                  'permissionId',
                ], data),
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

    await afterUpdate(getCtx, result as RolesToPermission);

    return result as RolesToPermission;
  };

  const upsert = async (
    data: MutationUpdateRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.rolesToPermission.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'roleId',
                'permissionId',
              ], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), update: R.mergeDeepLeft(
      rest,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'roleId',
                'permissionId',
              ], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (
    filter: RolesToPermissionFilter,
    data: MutationCreateRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const cnt = await count({filter});

    if (cnt > 1) {
      throw new Error(`There is more then one entity (${cnt}) that fits filter "${JSON.stringify(filter)}"`);
    }

    if (cnt === 0) {
      return create(data);
    } else {
      const current = await findOne({filter});

      if (!current) {
        return create(data);
      }

      return update({
        ...data,
        id: current.id,
      });
    }
  };

  const del = async (
    params: MutationRemoveRolesToPermissionArgs,
  ): Promise<RolesToPermission> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.rolesToPermission.delete({where: {id: params.id}});

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

  const baseMethods: BaseRolesToPermissionsMethods = {
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
