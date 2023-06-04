/* eslint-disable @typescript-eslint/ban-types,max-len */
import {AllRequestArgs} from '../../../../utils/types';
import {BaseService, Obj, PrismaLocalDelegation, WithID} from './BaseService';
import {Context, DocumentConfig} from '../../types';
import {PrismaPromise} from '@prisma/client';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../../types/utils';
import * as R from 'ramda';
import {serviceUtils} from './utils';
import {ServiceErrors} from './ServiceErrors';

export const getRegistrarFields = R.pick(['row', 'registrarTypeId', 'registrarId']);

export class DocumentBaseService<
  Entity extends WithID,
  MutationCreateArgs extends {},
  MutationUpdateArgs extends WithID,
  MutationRemoveArgs extends WithID,
  QueryAllArgs extends AllRequestArgs,
  AutodefinableKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  ForbidenForUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RequiredDbNotUserKeys extends keyof Entity & keyof MutationCreateArgs & keyof MutationUpdateArgs,
  RegistryEntries extends {},
  PrismaDelegate extends PrismaLocalDelegation<Entity>,
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
  PrismaDelegate,
  AutodefinablePart,
  ReliableCreateUserInput,
  AllowedForUserCreateInput,
  StrictCreateArgs,
  StrictUpdateArgs,
  StrictCreateArgsWithoutAutodefinable,
  MutationCreateArgsWithoutAutodefinable,
  MutationUpdateArgsWithoutAutodefinable
> {
  constructor(
    protected ctx: Context,
    public prismaService: any, // todo: do something about it PrismaClient[keyof PrismaClient],
    public config: DocumentConfig,
  ) {
    super(ctx, prismaService, config);
  }

  async post (
    data: Entity,
  ): Promise<void> {
    if (!this.allowedToChange(data, serviceUtils)) {
      throw new Error(ServiceErrors.DoNotAllowToChange);
    }
    await this.ctx.prisma.$transaction(await this.getPostOperations(await this.augmentByDefault(data)));
  }

  async rePost (
    id: Entity['id'],
  ): Promise<void> {
    const data = await this.get(id);

    if (!data) {
      throw new Error(`There is no document with "${id}" id`);
    }

    await this.post(data);
  }

  async getRegistryEntries (
    _data: StrictUpdateArgs,
  ): Promise<RegistryEntries> {
    return this.config.registries.reduce((accum, key) => ({
      ...accum,
      [key]: [],
    }), {} as RegistryEntries);
  }

  async getPostOperations (
    data: StrictUpdateArgs,
  ): Promise<PrismaPromise<any>[]> {
    const registries: any[] = this.config.registrarDependedRegistries;

    if (!registries.length) {
      return [];
    }

    const cus = await this.getRegistryEntries(data);

    const customOps: PrismaPromise<any>[] = registries.flatMap(registry => {
      const externalSearch = this.config.externalSearchDeps?.[registry];

      return cus[registry].flatMap((en: any) => {
        const createData = {
          ...en,
          registrarTypeId: this.config.entityTypeId,
          registrarId: data.id,
        };

        const operations = [
          this.ctx.prisma[registry].create({
            data: createData,
          }),
        ];

        if (externalSearch) {
          const where = getRegistrarFields(createData);

          operations.push(
            this.ctx.prisma[externalSearch].upsert({
              where: {
                registrarTypeId_registrarId_row: where,
              },
              create: {
                ...where,
                lastUpdated: new Date(),
                lastSynced: new Date(1),
              },
              update: {
                lastUpdated: new Date(),
              },
            }),
          );
        }

        return operations;
      });
    });

    return [
      await this.getUnPostOperations(data.id),
      customOps,
    ].flat();
  }

  async getUnPostOperations (id: Entity['id']) {
    return this.config.registries.flatMap(registry => {
      const externalSearch = this.config.externalSearchDeps?.[registry];
      const deleteWhere = {
        registrarTypeId: this.config.entityTypeId,
        registrarId: id,
      };

      const operations = [
        this.ctx.prisma[registry].deleteMany({
          where: deleteWhere,
        }),
      ];

      if (externalSearch) {
        operations.push(
          this.ctx.prisma[externalSearch].updateMany({
            where: deleteWhere,
            data: {
              lastUpdated: new Date(),
            },
          }),
        );
      }

      return operations;
    });
  }
}
