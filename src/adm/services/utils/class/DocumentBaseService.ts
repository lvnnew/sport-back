/* eslint-disable @typescript-eslint/ban-types,max-len */
import {IAllRequestArgs} from '../../../../utils/types';
import {BaseService, Obj, WithID} from './BaseService';
import {Context, DocumentConfig} from '../../types';
import {PrismaPromise} from '@prisma/client';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';

export class DocumentBaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends IAllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RegistryEntries extends {},
  AutodefinablePart extends {} = DefinedRecord<Pick<MutationCreateArgs, AutodefinableKeys>>,
  ReliableCreateUserInput extends {} = Omit<MutationCreateArgs, ForbidenForUserKeys> & AutodefinablePart,
  AllowedForUserCreateInput extends Obj = Omit<MutationCreateArgs, ForbidenForUserKeys>,
  StrictCreateArgs extends {} = DefinedFieldsInRecord<MutationCreateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictUpdateArgs extends WithID = DefinedFieldsInRecord<MutationUpdateArgs, RequiredDbNotUserKeys> & AutodefinablePart,
  StrictCreateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>, // todo: StrictCreateArgs instead of MutationCreateArgs
  MutationCreateArgsWithoutAutodefinable extends Obj = PartialFieldsInRecord<MutationCreateArgs, AutodefinableKeys>,
  MutationUpdateArgsWithoutAutodefinable extends WithID = PartialFieldsInRecord<MutationUpdateArgs, AutodefinableKeys> & Pick<MutationUpdateArgs, 'id'> // todo: I added & Pick<MutationUpdateArgs, 'id'>,
  > extends BaseService<
  Entity,
  MutationCreateArgs,
  MutationUpdateArgs,
  MutationRemoveArgs,
  QueryAllArgs,
  AutodefinableKeys,
  ForbidenForUserKeys,
  RequiredDbNotUserKeys,
  AutodefinablePart,
  ReliableCreateUserInput,
  AllowedForUserCreateInput,
  StrictCreateArgs,
  StrictUpdateArgs,
  StrictCreateArgsWithoutAutodefinable,
  MutationCreateArgsWithoutAutodefinable,
  MutationUpdateArgsWithoutAutodefinable> {
  constructor(
    public ctx: Context,
    protected prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    protected config: DocumentConfig,
  ) {
    super(ctx, prismaService, config);
  }

  post = async (
    data: Entity,
  ): Promise<void> => {
    await this.ctx.prisma.$transaction(await this.getPostOperations(await this.augmentByDefault(data)));
  };

  rePost = async (
    id: Entity['id'],
  ): Promise<void> => {
    const data = await this.get(id);

    if (!data) {
      throw new Error(`There is no document with "${id}" id`);
    }

    await this.post(data);
  };

  getRegistryEntries = async (
    _data: StrictUpdateArgs,
  ): Promise<RegistryEntries> => this.config.registries.reduce((accum, key) => ({
    ...accum,
    [key]: [],
  }), {} as RegistryEntries);

  getPostOperations = async (
    data: StrictUpdateArgs,
  ): Promise<PrismaPromise<any>[]> => {
    const registries: any[] = this.config.registrarDependedRegistries;

    if (!registries.length) {
      return [];
    }

    const cus = await this.getRegistryEntries(data);

    const customOps: PrismaPromise<any>[] = registries.map(registry =>
      this.ctx.prisma[registry].createMany({
        data: cus[registry].map((en: any) => ({
          ...en,
          registrarTypeId: this.config.entityTypeId,
          registrarId: data.id,
        })),
      }));

    return [
      await this.getUnPostOperations(data.id),
      customOps,
    ].flat();
  };

  getUnPostOperations = async (id: Entity['id']) => {
    return this.config.registries.map(registry => this.ctx.prisma[registry].deleteMany({
      where: {
        registrarTypeId: this.config.entityTypeId,
        registrarId: id,
      },
    }));
  };
}
