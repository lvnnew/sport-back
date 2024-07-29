import {Context} from '../../adm/services/types';
import PlayerRank from '../../types/PlayerRank';

// DO NOT EDIT! THIS IS GENERATED FILE

const initPlayerRanks = async (ctx: Context) => {
  await ctx.service('playerRanks').createMany([
    {
      id: PlayerRank.Reserve,
      rating: 0,
      title: 'Игрок резерва',
    },
    {
      id: PlayerRank.Support,
      rating: 1000,
      title: 'Игрок запаса',
    },
    {
      id: PlayerRank.Basis,
      rating: 2000,
      title: 'Игрок основы',
    },
    {
      id: PlayerRank.Start,
      rating: 3000,
      title: 'Игрок старта',
    },
    {
      id: PlayerRank.Important,
      rating: 4000,
      title: 'Важный игрок',
    },
    {
      id: PlayerRank.Star,
      rating: 5000,
      title: 'Звездный игрок',
    },
    {
      id: PlayerRank.Legend,
      rating: 6000,
      title: 'Легенда команды',
    },
  ]);
};

export default initPlayerRanks;
