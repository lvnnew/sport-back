import {
  ListMetadata,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
  QueryAllUsersArgs,
  Query_AllUsersMetaArgs,
  User,
  UserFilter,
} from '../../../generated/graphql';
import {toPrismaRequest} from '../../../utils/prisma/toPrismaRequest';
import {toPrismaTotalRequest} from '../../../utils/prisma/toPrismaTotalRequest';
import {Context} from '../context';
import {Prisma} from '@prisma/client';
import {AdditionalUsersMethods, getAdditionalMethods} from './additionalMethods';
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

export interface BaseUsersMethods {
  get: (id: number) =>
    Promise<User | null>;
  all: (params?: QueryAllUsersArgs) =>
    Promise<User[]>;
  findOne: (params?: QueryAllUsersArgs) =>
    Promise<User | null>;
  count: (params?: Query_AllUsersMetaArgs) =>
    Promise<number>;
  meta: (params?: Query_AllUsersMetaArgs) =>
    Promise<ListMetadata>;
  create: (data: MutationCreateUserArgs) =>
    Promise<User>;
  createMany: (data: MutationCreateUserArgs[]) =>
    Promise<Prisma.BatchPayload>;
  update: ({id, ...rest}: MutationUpdateUserArgs) =>
    Promise<User>;
  upsert: (data: MutationUpdateUserArgs) =>
    Promise<User>;
  upsertAdvanced: (
    filter: UserFilter,
    data: MutationCreateUserArgs,
  ) =>
    Promise<User>;
  delete: (params: MutationRemoveUserArgs) =>
    Promise<boolean>;
}

export type UsersService = BaseUsersMethods & AdditionalUsersMethods;

export const getUsersService = (getCtx: () => Context) => {
  const get = async (
    id: number,
  ): Promise<User | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.user.findUnique({where: {id}});
  };

  const all = async (
    params: QueryAllUsersArgs = {},
  ): Promise<User[]> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.user.findMany(
      toPrismaRequest(params, {noId: true}),
    ) as unknown as Promise<User[]>;
  };

  const findOne = async (
    params: QueryAllUsersArgs = {},
  ): Promise<User | null> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.user.findFirst(toPrismaRequest(params, {noId: true}));
  };

  const count = async (
    params: Query_AllUsersMetaArgs = {},
  ): Promise<number> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return getCtx().prisma.user.count(toPrismaTotalRequest(params));
  };

  const meta = async (
    params: Query_AllUsersMetaArgs = {},
  ): Promise<ListMetadata> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    return count(params).then(count => ({count}));
  };

  const create = async (
    data: MutationCreateUserArgs,
  ): Promise<User> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeCreate(getCtx, data);

    const createOperation = getCtx().prisma.user.create({
      data: R.mergeDeepLeft(
        processedData,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'lastname',
                  'firstname',
                  'email',
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

    // update search. earlier we does not have id
    await getCtx().prisma.user.update({
      where: {id: result.id},
      data: {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'lastname',
                'firstname',
                'email',
              ], result),
            )
            .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
        ].join(' '),
      },
    });

    await afterCreate(getCtx, result as User);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as User;
  };

  const createMany = async (
    entries: MutationCreateUserArgs[],
  ): Promise<Prisma.BatchPayload> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const result = await getCtx().prisma.user.createMany({
      data: entries.map(data => R.mergeDeepLeft(
        data,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'lastname',
                  'firstname',
                  'email',
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
    data: MutationUpdateUserArgs,
  ): Promise<User> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const processedData = await beforeUpdate(getCtx, data);

    const {id, ...rest} = processedData;

    const updateOperation = getCtx().prisma.user.update({
      data: R.mergeDeepLeft(
        rest,
        {
          search: [
            ...R
              .toPairs(
                R.pick([
                  'id',
                  'lastname',
                  'firstname',
                  'email',
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

    await afterUpdate(getCtx, result as User);

    if (!result) {
      throw new Error('There is no such entity');
    }

    return result as User;
  };

  const upsert = async (
    data: MutationUpdateUserArgs,
  ): Promise<User> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const {id, ...rest} = data;

    const result = await getCtx().prisma.user.upsert({create: R.mergeDeepLeft(
      data,
      {
        search: [
          ...R
            .toPairs(
              R.pick([
                'id',
                'lastname',
                'firstname',
                'email',
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
                'lastname',
                'firstname',
                'email',
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
    filter: UserFilter,
    data: MutationCreateUserArgs,
  ): Promise<User> => {
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
    params: MutationRemoveUserArgs,
  ): Promise<boolean> => {
    if (!getCtx()) {
      throw new Error('Context is not initialised');
    }

    const deleteOperation = getCtx().prisma.user.delete({where: {id: params.id}});

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

  const baseMethods: BaseUsersMethods = {
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
