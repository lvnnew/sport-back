import {Context} from '../../adm/services/types';
import {faker} from '@faker-js/faker';
import log from '../../log';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const currentDate = new Date();
const minDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
const maxDate = new Date(currentDate.getFullYear() - 4, currentDate.getMonth(), currentDate.getDate());

const generateData = (numberOfPlayers: number, parentIds: number[]) => {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();

  return Array.from({length: numberOfPlayers}).fill(null).map((_, index) => ({
    firstname,
    lastname,
    patronymic: faker.name.middleName(),
    number: getRandomInt(1, 100),
    dateOfBirth: getRandomDate(minDate, maxDate).toISOString(),
    parentId: parentIds[index % parentIds.length],
    createdByManagerId: 2,
    title: `${firstname} ${lastname}`,
  }));
};

const initPlayers = async (ctx: Context) => {
  log.info('initPlayers: start');

  const parents = await ctx.service('parents').all();

  const players = generateData(25, parents.map(parent => parent.id));
  for (const player of players) {
    try {
      await ctx.service('players').create(player);
    } catch (error: any) {
      log.warn(error);
    }
  }

  log.info('initPlayers: end');
};

export default initPlayers;
