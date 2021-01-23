/* eslint-disable sort-keys-fix/sort-keys-fix */
// import apm from 'elastic-apm-node/start';
import {getPrisma} from '../../prisma/prisma';
import AgrTagsService from './AgrTagsService';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export type AgrContext = ThenArg<ReturnType<typeof createAgrContext>>

export const createAgrContext = async () => {
  const prisma = await getPrisma();

  const agrTags = new AgrTagsService();

  const close = async () => {
    prisma.$disconnect();
  };

  const context = {
    prisma,

    agrTags,

    close,
  };

  await Promise.all([
    agrTags.init(context),
  ]);

  return context;
};

let ctx: AgrContext | null = null;

export const getAgrContext = async (): Promise<AgrContext> => {
  if (!ctx) {
    ctx = await createAgrContext();
  }

  return ctx;
};
