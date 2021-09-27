import {PrismaClient} from '@prisma/client';
import {getConfig} from '../config';
import {log} from '../log';
import {addParamsToDatabaseUri} from '../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let prisma: PrismaClient | null = null;

export const getPrisma = async (appName = 'someBack_Prisma') => {
  const config = await getConfig();

  log.info(appName, typeof addParamsToDatabaseUri);

  // const url = addParamsToDatabaseUri(config.databaseUri, {
  //   application_name: appName,
  //   ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
  // });

  const url = config.databaseUri;

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
