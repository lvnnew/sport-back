import {Context} from '../../adm/services/types';
import PlayerAggregatedRole from '../../types/PlayerAggregatedRole';

// DO NOT EDIT! THIS IS GENERATED FILE

const initPlayerAggregatedRoles = async (ctx: Context) => {
  await ctx.service('playerAggregatedRoles').createMany([
    {
      id: PlayerAggregatedRole.AttackAggregated,
      title: 'Нападающий',
    },
    {
      id: PlayerAggregatedRole.MidfielderAggregated,
      title: 'Полузащитник',
    },
    {
      id: PlayerAggregatedRole.DefenderAggregated,
      title: 'Защитник',
    },
    {
      id: PlayerAggregatedRole.GoalkeeperAggregated,
      title: 'Вратарь',
    },
  ]);
};

export default initPlayerAggregatedRoles;
