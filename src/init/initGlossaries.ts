/* eslint-disable max-len */
import {createContext} from '../adm/services/context';
import PeriodType from '../types/PeriodType';

// yarn ts-node:withContext src/init/initGlossaries.ts
// runlify start env=stage yarn ts-node:withContext src/init/initGlossaries.ts
// runlify start env=test yarn ts-node:withContext src/init/initGlossaries.ts

const initGlossaries = async () => {
  const ctx = await createContext();
  await ctx.service('glossaries').createMany([
    {
      title: 'Вынос',
      description: 'Активное действие игрока по перемещению мяча из штрафной площади обороняющейся команды.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Блок',
      description: 'Действие внутри штрафной площади, по перехвату передачи или удара игроком обороняющейся команды.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Грубая ошибка',
      description: 'Неудачное действие игрока обороняющейся команды, за которым последовал голевой момент.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Отбор',
      description: 'Активное действие игрока. Регистрируется при попытке отобрать мяч у игрока, им владеющим.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Перехват',
      description: 'Активное действие игрока. Овладевание игроком мяча после направленной передачи или удара соперника за пределами штрафной площади.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Позиционная ошибка',
      description: 'Неудачное действие игрока, когда в ситуации позиционной обороны, он занимает не то место, которое предписано установкой тренера и тактической схемой.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Прессинг',
      description: 'Оказание давление на игрока с мячом при позиционной обороне.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Контрпрессинг',
      description: 'Попытка оказания давления на игрока сразу после потери мяча, когда атака еще не стала позиционной. Фаза длится до 4 секунд.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Опека',
      description: 'Ошибка игрока при игре 1 в 1, позволяющее игроку атаки продвинуть мяч за линию обороны.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Передача +/-',
      description: 'Пас партнеру, «отрезающий» целую линию обороны соперника (3 и более футболиста), совершенный в активной фазе атаки.(Если передача точная +, неточная -)',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Дриблинг +/-',
      description: 'Регистрируется при попытке игроком пройти соперника с помощью дриблинга. Активное действие игрока, владеющего мячом.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'Сохранение мяча под прессингом/потеря под Прессингом',
      description: 'Результат владения мяча игроком, при регистрации прессинга у соперника.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'СГМ +/-',
      description: 'Совокупность действий направленных на создание ситуации, при которой следующее действие удар в сторону ворот. Передача, риблинг, либо удар, при условии того, что в течение последних 2 секунд, не было зарегистрировано действий со стороны партнеров.',
      periodTypeId: PeriodType.FirstTime,
    },
    {
      title: 'РГМ',
      description: 'Забитый мяч.',
      periodTypeId: PeriodType.FirstTime,
    },
  ]);
};

export default initGlossaries;
