import {PrismaClient} from '@prisma/client';
import {getAgrConfig} from '../agr/config';

let prisma: PrismaClient | null = null;

export const getPrisma = async () => {
  const agrConfig = await getAgrConfig();
  const url = agrConfig.database.uri;

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
