/* eslint-disable @typescript-eslint/ban-types */
import {PrismaPromise} from '@prisma/client';
import {Context} from './types';

export type HooksUtilsType<
  E extends {}, //  entity
  QA extends {}, // query all entities arguments
  MCWAD extends {}, // mutation create entity arguments with auto definable fields
  MU extends {}, // mutation update entity arguments
  MR extends {}, // mutation remove entity arguments
  SMC extends {} = MCWAD, // strict mutation create entity arguments
  SMU extends {} = MU, // strict mutation create entity arguments
  > = {
  changeListFilter: (ctx: Context, args: QA) => Promise<QA>;
  beforeCreate: (ctx: Context, data: MCWAD) => Promise<SMC>;
  beforeCreateStrict: (ctx: Context, data: SMC) => Promise<SMC>;
  afterCreate: (ctx: Context, data: E) => Promise<void>;
  beforeUpdate: (ctx: Context, data: SMU) => Promise<SMU>;
  afterUpdate: (ctx: Context, data: E) => Promise<void>,
  beforeDelete: (ctx: Context, params: MR) => Promise<void>;
  afterDelete: (ctx: Context, data: E) => Promise<void>;
  beforeUpsert: (ctx: Context, data: {
    createData: MCWAD;
    updateData: SMU;
  }) => Promise<{
    createData: SMC;
    updateData: SMU;
  }>;
  beforeUpsertStrict: (ctx: Context, data: {
    createData: SMC;
    updateData: SMU;
  }) => Promise<{
    createData: SMC;
    updateData: SMU;
  }>;
  additionalOperationsOnCreate: (ctx: Context, data: MCWAD) => Promise<PrismaPromise<any>[]>;
  additionalOperationsOnUpdate: (ctx: Context, data: MU) => Promise<PrismaPromise<any>[]>;
  additionalOperationsOnDelete: (ctx: Context, data: MR) => Promise<PrismaPromise<any>[]>;
};

export type HooksAddType<
  E extends {}, //  entity
  QA extends {}, // query all entities arguments
  MCWAD extends {}, // mutation create entity arguments with auto definable fields
  MU extends {}, // mutation update entity arguments
  MR extends {}, // mutation remove entity arguments
  SMC extends {} = MCWAD, // strict mutation create entity arguments
  SMU extends {} = MU, // strict mutation create entity arguments
  T = HooksUtilsType<E, QA, MCWAD, MU, MR, SMC, SMU>,
  > = {hooksAdd: {[K in keyof T]: (func: T[K]) => any}};

type ObjValToArr<T> = {
  [K in keyof T]: T[K][];
}

export const getHooksUtils = <
  E extends {}, //  entity
  QA extends {}, // query all entities arguments
  MC extends {}, // mutation create entity arguments
  MU extends {}, // mutation update entity arguments
  MR extends {}, // mutation remove entity arguments
  SMC extends {} = MC, // strict mutation create entity arguments
  SMU extends {} = MU, // strict mutation create entity arguments
  >() => {
  type ServiceHooksType = HooksUtilsType<E, QA, MC, MU, MR, SMC, SMU>;
  const hooks: ObjValToArr<ServiceHooksType> = {
    changeListFilter: [],
    beforeCreate: [],
    beforeCreateStrict: [],
    afterCreate: [],
    beforeUpdate: [],
    afterUpdate: [],
    beforeDelete: [],
    afterDelete: [],
    beforeUpsert: [],
    beforeUpsertStrict: [],
    additionalOperationsOnCreate: [],
    additionalOperationsOnUpdate: [],
    additionalOperationsOnDelete: [],
  } as unknown as ObjValToArr<ServiceHooksType>;

  type KeysWithReturnedSecondAttr =
    | 'beforeCreate'
    | 'beforeCreateStrict'
    | 'beforeUpdate'
    | 'beforeUpsert'
    | 'beforeUpsertStrict'
    | 'changeListFilter';

  const runWithReturnSecondAttr = <T extends KeysWithReturnedSecondAttr>(key: T): ServiceHooksType[T] =>
    async (ctx: Context, data: any) => { // arg type Parameters<ServiceHooksType[T]>[1]
      let processedData = data;
      for (const hook of hooks[key]) {
        processedData = await hook(ctx, processedData);
      }

      return processedData;
    };

  const runWithReturnSecondAttrWithStrict = <T extends 'beforeCreate' | 'beforeUpsert'>(key: T): ServiceHooksType[T] =>
    async (ctx: Context, data: any) => { // arg type Parameters<ServiceHooksType[T]>[1]
      let processedData = data;
      for (const hook of hooks[key]) {
        processedData = await hook(ctx, processedData);
      }

      for (const hook of hooks[`${key}Strict`]) {
        processedData = await hook(ctx, processedData);
      }

      return processedData;
    };

  type KeysWithReturnedTypeVoid = 'afterCreate' | 'afterUpdate' | 'afterDelete' | 'beforeDelete';

  const runWithReturnVoid = <T extends KeysWithReturnedTypeVoid>(key: T): ServiceHooksType[T] =>
    async (ctx: Context, attr: any): Promise<void> => {
      for (const hook of hooks[key]) {
        await hook(ctx, attr);
      }
    };

  const runImmediatelyAllWithReturnVoid = <T extends KeysWithReturnedTypeVoid>(key: T): ServiceHooksType[T] =>
    async (ctx: Context, attr: any) => {
      await Promise.all(hooks[key].map((hook) => hook(ctx, attr)));
    };

  type KeysWithReturnedTypeVoidArr = 'additionalOperationsOnCreate' | 'additionalOperationsOnUpdate' | 'additionalOperationsOnDelete';
  const runImmediatelyAllWithReturnVoidArr = <T extends KeysWithReturnedTypeVoidArr>(key: T): ServiceHooksType[T] =>
    async (ctx: Context, attr: any): Promise<PrismaPromise<any>[]> => {
      const callHookPromises: PrismaPromise<any>[][] = await Promise.all(hooks[key].map((hook) => hook(ctx, attr)));

      return callHookPromises.flat();
    };

  // todo: rename to hooks
  const runHooks: Omit<ServiceHooksType, 'beforeCreateStrict' | 'beforeUpsertStrict'> = {
    changeListFilter: runWithReturnSecondAttr('changeListFilter'),
    beforeCreate: runWithReturnSecondAttrWithStrict('beforeCreate'),
    // beforeCreateStrict: runWithReturnSecondAttr('beforeCreateStrict'),
    beforeUpsert: runWithReturnSecondAttrWithStrict('beforeUpsert'),
    // beforeUpsertStrict: runWithReturnSecondAttr('beforeUpsertStrict'),
    beforeUpdate: runWithReturnSecondAttr('beforeUpdate'),
    afterCreate: runImmediatelyAllWithReturnVoid('afterCreate'),
    afterUpdate: runImmediatelyAllWithReturnVoid('afterUpdate'),
    afterDelete: runWithReturnVoid('afterDelete'),
    beforeDelete: runWithReturnVoid('beforeDelete'),
    additionalOperationsOnCreate: runImmediatelyAllWithReturnVoidArr('additionalOperationsOnCreate'),
    additionalOperationsOnUpdate: runImmediatelyAllWithReturnVoidArr('additionalOperationsOnUpdate'),
    additionalOperationsOnDelete: runImmediatelyAllWithReturnVoidArr('additionalOperationsOnDelete'),
  };

  const hooksAdd: HooksAddType<E, QA, MC, MU, MR, SMC, SMU>['hooksAdd'] = {
    changeListFilter: (hook: ServiceHooksType['changeListFilter']) => hooks.changeListFilter.unshift(hook),
    beforeCreate: (hook: ServiceHooksType['beforeCreate']) => hooks.beforeCreate.unshift(hook),
    beforeCreateStrict: (hook: ServiceHooksType['beforeCreateStrict']) => hooks.beforeCreateStrict.unshift(hook),
    afterCreate: (hook: ServiceHooksType['afterCreate']) => hooks.afterCreate.unshift(hook),
    beforeUpdate: (hook: ServiceHooksType['beforeUpdate']) => hooks.beforeUpdate.unshift(hook),
    afterUpdate: (hook: ServiceHooksType['afterUpdate']) => hooks.afterUpdate.unshift(hook),
    beforeDelete: (hook: ServiceHooksType['beforeDelete']) => hooks.beforeDelete.unshift(hook),
    afterDelete: (hook: ServiceHooksType['afterDelete']) => hooks.afterDelete.unshift(hook),
    beforeUpsert: (hook: ServiceHooksType['beforeUpsert']) => hooks.beforeUpsert.unshift(hook),
    beforeUpsertStrict: (hook: ServiceHooksType['beforeUpsertStrict']) => hooks.beforeUpsertStrict.unshift(hook),
    additionalOperationsOnCreate: (hook: ServiceHooksType['additionalOperationsOnCreate']) =>
      hooks.additionalOperationsOnCreate.unshift(hook),
    additionalOperationsOnUpdate: (hook: ServiceHooksType['additionalOperationsOnUpdate']) =>
      hooks.additionalOperationsOnUpdate.unshift(hook),
    additionalOperationsOnDelete: (hook: ServiceHooksType['additionalOperationsOnDelete']) =>
      hooks.additionalOperationsOnDelete.unshift(hook),
  };

  return {hooksAdd, runHooks};
};

export class HooksUtils<
  E extends {}, //  entity
  QA extends {}, // query all entities arguments
  MC extends {}, // mutation create entity arguments
  MU extends {}, // mutation update entity arguments
  MR extends {}, // mutation remove entity arguments
  SMC extends {} = MC, // strict mutation create entity arguments
  SMU extends {} = MU, // strict mutation create entity arguments
  > {
  _hooks;
  hooksAdd;

  constructor() {
    // todo: maybe move implementation to class
    const {hooksAdd, runHooks} = getHooksUtils<E, QA, MC, MU, MR, SMC, SMU>();

    this._hooks = runHooks;
    this.hooksAdd = hooksAdd;
  }
}
