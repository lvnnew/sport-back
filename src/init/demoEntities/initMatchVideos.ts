import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';
import {Match} from '../../generated/graphql';

const generateData = (matches: Match[]) => {
  return [...matches.map((match) => ({
    videoTitle: faker.word.noun(),
    // eslint-disable-next-line max-len
    videoLink: 'https://www.youtube.com/watch?v=LvQossUx7ss&ab_channel=%D0%9A%D0%90%D0%A5%D0%9E%D0%92%D0%A1%D0%9A%D0%98%D0%99%D0%94%D0%A0%D0%9E%D0%9D',
    matchId: match.id,
  })),
  ...matches.map((match) => ({
    videoTitle: faker.word.noun(),
    videoLink: 'https://www.youtube.com/watch?v=0uldn0xvDSM&ab_channel=EssenceandScience',
    matchId: match.id,
  })),
  ];
};

const initMatchVideos = async (ctx: Context) => {
  log.info('initMatchVideos: start');

  const matches = await ctx.service('matches').all();

  const matchVideosToSave = await generateData(matches);
  for (const matchVideo of matchVideosToSave) {
    try {
      await ctx.service('matchVideos').create(matchVideo);
    } catch (error: any) {
      log.warn(error.messahe);
    }

    log.info('initMatchVideos: end');
  }
};

export default initMatchVideos;
