/* eslint-disable sort-keys-fix/sort-keys-fix */
// import apm from 'elastic-apm-node/start';
import {getPrisma} from '../../prisma/prisma';
import TagsService from './TagsService';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export type AgrContext = ThenArg<ReturnType<typeof createAgrContext>>

export const createAgrContext = async () => {
  const prisma = await getPrisma();

  const tags = new TagsService();

  const close = async () => {
    prisma.$disconnect();
  };

  const context = {
    prisma,

    tags,

    close,
  };

  await Promise.all([
    tags.init(context),
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
