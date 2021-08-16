import {
  ListMetadata,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
  QueryAllManagersToRolesArgs,
  Query_AllManagersToRolesMetaArgs,
  ManagersToRole,
  ManagersToRoleFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalManagersToRolesMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseManagersToRolesMethods {
  get: (id: number) => Promise<ManagersToRole | null>;
  all: (params?: QueryAllManagersToRolesArgs) => Promise<ManagersToRole[]>;
  findOne: (params?: QueryAllManagersToRolesArgs) => Promise<ManagersToRole | null>;
  count: (params?: Query_AllManagersToRolesMetaArgs) => Promise<number>;
  meta: (params?: Query_AllManagersToRolesMetaArgs) => Promise<ListMetadata>;
  create: (data: MutationCreateManagersToRoleArgs) => Promise<ManagersToRole>;
  createMany: (data: MutationCreateManagersToRoleArgs[]) => Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateManagersToRoleArgs) => Promise<ManagersToRole>;
  upsert: (data: MutationUpdateManagersToRoleArgs) => Promise<ManagersToRole>;
  upsertAdvanced: (filter: ManagersToRoleFilter, data: MutationCreateManagersToRoleArgs) => Promise<ManagersToRole>;
  delete: (params: MutationRemoveManagersToRoleArgs) => Promise<boolean>;
}

export type ManagersToRolesService = BaseManagersToRolesMethods & AdditionalManagersToRolesMethods;

export const getManagersToRolesService = (getCtx: () => Context) => {
  const get = async (id: number): Promise<ManagersToRole | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToRole.findUnique({where: {id}});
  };

  const all = async (params: QueryAllManagersToRolesArgs = {}): Promise<ManagersToRole[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToRole.findMany(toPrismaRequest(params, {noId: true})) as unknown as Promise<ManagersToRole[]>;
  };

  const findOne = async (params: QueryAllManagersToRolesArgs = {}): Promise<ManagersToRole | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToRole.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (params: Query_AllManagersToRolesMetaArgs = {}): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.managersToRole.count(toPrismaTotalRequest(params));
  };

  const meta = async (params: Query_AllManagersToRolesMetaArgs = {}): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (data: MutationCreateManagersToRoleArgs): Promise<ManagersToRole> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.managersToRole.create({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'manageId', 'roleId'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

          ].join(' '),

        },
        processedData,
      ),
    });

    const operations = [
      createOperation,
      ...(await additionalOperationsOnCreate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    // update search. earlier we does not have id
    await getCtx().prisma.managersToRole.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'title', 'manageId', 'roleId'], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

        ].join(' '),

      },
    });

    await afterCreate(getCtx, result as ManagersToRole);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as ManagersToRole;
  };

  const createMany = async (entries: MutationCreateManagersToRoleArgs[]): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.managersToRole.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'manageId', 'roleId'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

          ].join(' '),

        },
        data,
      )),
      skipDuplicates: true,
    });

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const update = async (data: MutationUpdateManagersToRoleArgs): Promise<ManagersToRole> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.managersToRole.update({
      data: R.mergeDeepLeft(
        {
          search: [
            ...R
              .toPairs(
                R.pick(['id', 'title', 'manageId', 'roleId'], data),
              )
              .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

          ].join(' '),

        },
        rest,
      ),
      where: {id},
    });

    const operations = [
      updateOperation,
      ...(await additionalOperationsOnUpdate(getCtx, processedData)),
    ];

    const [result] = await getCtx().prisma.$transaction(operations as any);

    await afterUpdate(getCtx, result as ManagersToRole);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as ManagersToRole;
  };

  const upsert = async (data: MutationUpdateManagersToRoleArgs): Promise<ManagersToRole> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.managersToRole.upsert({create: R.mergeDeepLeft(
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'title', 'manageId', 'roleId'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

        ].join(' '),

      },
      data,
    ), update: R.mergeDeepLeft(
      {
        search: [
          ...R
            .toPairs(
              R.pick(['id', 'title', 'manageId', 'roleId'], data),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),

        ].join(' '),

      },
      rest,
    ), where: {id}});

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result;
  };

  const upsertAdvanced = async (filter: ManagersToRoleFilter, data: MutationCreateManagersToRoleArgs): Promise<ManagersToRole> => {
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

  const del = async (params: MutationRemoveManagersToRoleArgs): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.managersToRole.delete({where: {id: params.id}});

    const operations = [
      deleteOperation,
      ...(await additionalOperationsOnDelete(getCtx, params)),
    ];

    const entity = await get(params.id);

    if (!entity) {
      throw new Error(`There is no entity with "${params.id}" id`);
    }

    const [result] = await getCtx().prisma.$transaction(operations as any);

    await afterDelete(getCtx, entity);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return true;
  };

  const baseMethods: BaseManagersToRolesMethods = {
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
