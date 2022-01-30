import {createContext} from '../adm/services/context';
import log from '../log';

// yarn ts-node src/cli/tryPrisma.ts

const app = async () => {
  log.info('start');

  const ctx = await createContext();

  log.info(
    await ctx.prisma.manager.findMany({take: 3}),
  );

  await ctx.close();
  log.info('finish');
};

app();
