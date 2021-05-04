/* eslint-disable @typescript-eslint/camelcase */
import {PrismaClient} from '@prisma/client';
import {getConfig} from '../config';
import {addParamsToPgUri} from '../utils/addParamsToPgUri';

// DO NOT EDIT! THIS IS GENERATED FILE

let prisma: PrismaClient | null = null;

export const getPrisma = async (appName = 'someBack_Prisma') => {
  const config = await getConfig();
  const url = addParamsToPgUri(config.pgUri, {
    application_name: appName,
    ...(process.env.NODE_ENV === 'production' ? {} : {connection_limit: '1'}),
  });

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
