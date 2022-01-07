import {expect} from 'jest-without-globals';
import {getOrCreateContext} from '../adm/services/context';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// ENV=test yarn test --testPathPattern tags

dayjs.extend(utc);

describe('tags', () => {
  it('creates', async () => {
    const ctx = await getOrCreateContext();
    const tag = await ctx.tags.create({
      comment: 'some tag',
    });

    const readedTag = await ctx.tags.get(tag.id);

    expect(readedTag?.comment).toBe('some tag');
  });
});
