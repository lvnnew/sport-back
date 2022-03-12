import {expect} from 'jest-without-globals';
import {createContext} from '../adm/services/context';
import {Context} from '../adm/services/types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// ENV=test yarn test --testPathPattern tags

let ctx: Context = null as any;
beforeAll(async () => {
  ctx = await createContext();
});
afterAll(async () => {
  await ctx.close();
});

describe('tags', () => {
  it('creates', async () => {
    ctx = await createContext();
    const tag = await ctx.service('tags').create({
      comment: 'some tag',
    });

    const readedTag = await ctx.service('tags').get(tag.id);

    expect(readedTag?.comment).toBe('some tag');
  });
});
