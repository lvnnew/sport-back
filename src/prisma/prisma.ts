/* eslint-disable @typescript-eslint/camelcase */
import {PrismaClient} from '@prisma/client';

// import {log} from '../log';
import {getAgrConfig} from '../agr/config';

let prisma: PrismaClient | null = null;

export const getPrisma = async () => {
  const agrConfig = await getAgrConfig();

  // const url = `postgresql://${agrConfig.database.user}:${agrConfig.database.password}@${agrConfig.database.host}:${agrConfig.database.port}/${agrConfig.database.name}`;

  const url = agrConfig.database.uri;

  // log.info(`url: ${url}`);
  // eslint-disable-next-line no-console
  // console.log(`url: ${url}`);

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
