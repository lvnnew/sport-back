import {expect} from 'jest-without-globals';
import {createContext} from '../adm/services/context';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// ENV=test yarn test --testPathPattern tags

dayjs.extend(utc);

describe('tags', () => {
  it('creates', async () => {
    const ctx = await createContext();
    const tag = await ctx.service('tags').create({
      comment: 'some tag',
    });

    const readedTag = await ctx.service('tags').get(tag.id);

    expect(readedTag?.comment).toBe('some tag');
  });
});
