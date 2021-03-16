import {PrismaClient} from '@prisma/client';
import {getAgrConfig} from '../agr/config';

// DO NOT EDIT! THIS IS GENERATED FILE

let prisma: PrismaClient | null = null;

export const getPrisma = async () => {
  const agrConfig = await getAgrConfig();
  const url = agrConfig.pgUri;

  if (!prisma) {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    });
  }

  return prisma;
};
