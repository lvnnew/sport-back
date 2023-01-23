import dayjs from 'dayjs';
import {describe, it, expect} from 'jest-without-globals';
import matchDate from './matchDate';

// yarn test --testPathPattern matchDate

describe('matchDate', () => {
  it('constricts matcher for equal without precision', () => {
    const date = new Date();

    expect(
      matchDate('field', date),
    ).toEqual({
      match: {
        field: date.toISOString(),
      },
    });
  });

  it('constricts matcher for equal with day precision', () => {
    const date = new Date();

    expect(
      matchDate('field', date, 'day'),
    ).toEqual({
      range: {
        field: {
          gte: dayjs(date).startOf('day').toDate(),
          lte: dayjs(date).endOf('day').toDate(),
        },
      },
    });
  });
});
