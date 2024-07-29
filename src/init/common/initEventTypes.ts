import {Context} from '../../adm/services/types';
import EventType from '../../types/EventType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEventTypes = async (ctx: Context) => {
  await ctx.service('eventTypes').createMany([
    {
      id: EventType.PlayerEnter,
      dependsOnPoint: false,
      needForSecondPlayer: false,
      points: 10,
      redCard: false,
      title: 'Выход на поле',
      yellowCard: false,
    },
    {
      id: EventType.YellowCard,
      dependsOnPoint: false,
      needForSecondPlayer: false,
      points: 15,
      redCard: false,
      title: 'Желтая карточка',
      yellowCard: true,
    },
    {
      id: EventType.RedCard,
      dependsOnPoint: false,
      needForSecondPlayer: false,
      points: 7,
      redCard: true,
      title: 'Красная карточка',
      yellowCard: false,
    },
    {
      id: EventType.Replacement,
      dependsOnPoint: false,
      needForSecondPlayer: true,
      points: 4,
      redCard: false,
      title: 'Замена',
      yellowCard: false,
    },
    {
      id: EventType.Swap,
      needForSecondPlayer: false,
      points: 20,
      title: 'Перестановка',
    },
  ]);
};

export default initEventTypes;
