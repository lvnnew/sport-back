import {Context} from '../../adm/services/types';
import PlayerRole from '../../types/PlayerRole';

// DO NOT EDIT! THIS IS GENERATED FILE

const initPlayerRoles = async (ctx: Context) => {
  await ctx.service('playerRoles').createMany([
    {
      id: PlayerRole.Goalkeeper,
      playerAggregatedRoleId: 'goalkeeperAggregated',
      shortTitle: 'ВР',
      title: 'Вратарь',
    },
    {
      id: PlayerRole.LeftBack,
      playerAggregatedRoleId: 'defenderAggregated',
      shortTitle: 'ЛЗ',
      title: 'Левый защитник',
    },
    {
      id: PlayerRole.LeftCenterBack,
      playerAggregatedRoleId: 'defenderAggregated',
      shortTitle: 'ЛЦЗ',
      title: 'Левый центральный защитник',
    },
    {
      id: PlayerRole.Centerdef,
      playerAggregatedRoleId: 'defenderAggregated',
      shortTitle: 'ЦЗ',
      title: 'Центральный защитник',
    },
    {
      id: PlayerRole.RightCenterBack,
      playerAggregatedRoleId: 'defenderAggregated',
      shortTitle: 'ПЦЗ',
      title: 'Правый центральный защитник',
    },
    {
      id: PlayerRole.RightBack,
      playerAggregatedRoleId: 'defenderAggregated',
      shortTitle: 'ПЗ',
      title: 'Правый защитник',
    },
    {
      id: PlayerRole.LeftMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ЛФБ',
      title: 'Левый фулбек',
    },
    {
      id: PlayerRole.LeftCentralMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ЛОПЗ',
      title: 'Левый опорный полузащитник',
    },
    {
      id: PlayerRole.CenterMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ОПЗ',
      title: 'Опорный полузащитник',
    },
    {
      id: PlayerRole.RightCentralMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ПОПЗ',
      title: 'Правый опорный полузащитник',
    },
    {
      id: PlayerRole.RightMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ПФБ',
      title: 'Правый фулбек',
    },
    {
      id: PlayerRole.LeftDefensiveMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ЛПЗ',
      title: 'Левый полузащитник',
    },
    {
      id: PlayerRole.LeftCenterDefensiveMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ЛАТПЗ',
      title: 'Левый атакующий полузащитник',
    },
    {
      id: PlayerRole.DefensiveMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ЦАПЗ',
      title: 'Центральный атакующий полузащитник',
    },
    {
      id: PlayerRole.RightCenterDefensiveMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ПАПЗ',
      title: 'Правый атакующий полузащитник',
    },
    {
      id: PlayerRole.RightDefensiveMidfielder,
      playerAggregatedRoleId: 'midfielderAggregated',
      shortTitle: 'ППЗ',
      title: 'Правый полузащитник',
    },
    {
      id: PlayerRole.LeftWinger,
      playerAggregatedRoleId: 'attackAggregated',
      shortTitle: 'ЛН',
      title: 'Левый нападающий',
    },
    {
      id: PlayerRole.LeftCenterWinger,
      playerAggregatedRoleId: 'attackAggregated',
      shortTitle: 'ЛЦН',
      title: 'Левый центральный нападающий',
    },
    {
      id: PlayerRole.CenterForward,
      playerAggregatedRoleId: 'attackAggregated',
      shortTitle: 'ЦН',
      title: 'Центральный нападающий',
    },
    {
      id: PlayerRole.RightCenterWinger,
      playerAggregatedRoleId: 'attackAggregated',
      shortTitle: 'ПЦН',
      title: 'Правый центральный нападающий',
    },
    {
      id: PlayerRole.RightWinger,
      playerAggregatedRoleId: 'attackAggregated',
      shortTitle: 'ПН',
      title: 'Правый нападающий',
    },
  ]);
};

export default initPlayerRoles;
