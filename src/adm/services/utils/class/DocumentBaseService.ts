/* eslint-disable @typescript-eslint/ban-types */
import {IAllRequestArgs} from '../../../../utils/types';
import {BaseEntity, BaseMU, BaseMR, BaseService} from './BaseService';
import {Context, ServiceConfig} from '../../types';

export class DocumentBaseService<E extends BaseEntity, //  entity
  QA extends IAllRequestArgs, // query all entities arguments
  MC extends {}, // mutation create entity arguments
  MU extends BaseMU, // mutation update entity arguments
  MR extends BaseMR, // mutation remove entity arguments
  SMC extends {} = MC, // strict mutation create entity arguments
  SMU extends BaseMU = MU, // strict mutation create entity arguments
  > extends BaseService<E, QA, MC, MU, MR, SMC, SMU> {
  constructor(
    public ctx: Context,
    protected prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    config: ServiceConfig,
  ) {
    super(ctx, prismaService, config);

    // todo: check it work or not
    // this.hooksAdd.additionalOperationsOnDelete((ctx, params) => getUnPostOperations(ctx, params.id))
    // this.hooksAdd.additionalOperationsOnUpdate(getPostOperations)
  }

  post = async (
    _data: E,
  ): Promise<void> => {
    // await this.ctx.prisma.$transaction(await getPostOperations(this.ctx, await this._augmentByDefault(data)));
  };

  rePost = async (
    id: E['id'],
  ): Promise<void> => {
    const data = await this.get(id);

    if (!data) {
      throw new Error(`There is no document with "${id}" id`);
    }

    await this.post(data);
  };

  // getRegistryEntries: async (data: E) => getRegistryEntries(ctx, await augmentByDefault(data)),
  // getPostOperations: async (data: E) => getPostOperations(ctx, await augmentByDefault(data)),
  // getUnPostOperations: (id: E['id']) => getUnPostOperations(ctx, id),
}
