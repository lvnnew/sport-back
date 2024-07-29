import {Context} from '../../adm/services/types';
import EventTypeCategory from '../../types/EventTypeCategory';

// DO NOT EDIT! THIS IS GENERATED FILE

const initEventTypeCategories = async (ctx: Context) => {
  await ctx.service('eventTypeCategories').createMany([
    {
      id: EventTypeCategory.Defense,
      title: 'Защита',
    },
    {
      id: EventTypeCategory.Attack,
      title: 'Атака',
    },
  ]);
};

export default initEventTypeCategories;
