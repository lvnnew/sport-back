/* eslint-disable @typescript-eslint/camelcase */
import {describe, expect} from 'jest-without-globals';
import {toPrismaWhere} from './toPrismaWhere';

// yarn test -t toPrismaWhere

describe('toPrismaWhere', () => {
  it('converts blank filter', () => {
    expect(
      toPrismaWhere({}),
    ).toEqual({});
  });

  it('converts null filter', () => {
    expect(
      toPrismaWhere(null),
    ).toEqual({});
  });

  it('converts flat filter', () => {
    expect(
      toPrismaWhere({name: 'someName'}),
    ).toEqual({name: 'someName'});
  });

  it('converts flat filter with ids', () => {
    expect(
      toPrismaWhere({
        ids: 'someId',
        name: 'someName',
      }),
    ).toEqual({name: 'someName'});
  });

  it('converts filter with lte condition', () => {
    const date = new Date();
    expect(
      toPrismaWhere({date_lte: date}),
    ).toEqual({
      AND: [
        {
          date: {
            lte: date,
          },
        },
      ],
    });
  });

  it('converts filter with gte condition', () => {
    const date = new Date();
    expect(
      toPrismaWhere({date_gte: date}),
    ).toEqual({
      AND: [
        {
          date: {
            gte: date,
          },
        },
      ],
    });
  });

  it('converts filter with lt condition', () => {
    const date = new Date();
    expect(
      toPrismaWhere({date_lt: date}),
    ).toEqual({
      AND: [
        {
          date: {
            lt: date,
          },
        },
      ],
    });
  });

  it('converts filter with gt condition', () => {
    const date = new Date();
    expect(
      toPrismaWhere({date_gt: date}),
    ).toEqual({
      AND: [
        {
          date: {
            gt: date,
          },
        },
      ],
    });
  });

  it('converts filter with in condition', () => {
    const str1 = 'str';
    const str2 = 'str';
    expect(
      toPrismaWhere({str_in: [str1, str2]}),
    ).toEqual({
      AND: [
        {
          str: {
            in: [str1, str2],
          },
        },
      ],
    });
  });

  it('converts filter with lt, lte, gt, gte conditions on different fields', () => {
    const date = new Date();
    expect(
      toPrismaWhere({
        date1_gt: date,
        date2_gte: date,
        date3_lt: date,
        date4_lte: date,
      }),
    ).toEqual({
      AND: [
        {
          date1: {
            gt: date,
          },
        },
        {
          date2: {
            gte: date,
          },
        },
        {
          date3: {
            lt: date,
          },
        },
        {
          date4: {
            lte: date,
          },
        },
      ],
    });
  });

  it('converts filter with lt, lte, gt, gte conditions on the same field', () => {
    const date = new Date();
    expect(
      toPrismaWhere({
        date_gt: date,
        date_gte: date,
        date_lt: date,
        date_lte: date,
      }),
    ).toEqual({
      AND: [
        {
          date: {
            gt: date,
          },
        },
        {
          date: {
            gte: date,
          },
        },
        {
          date: {
            lt: date,
          },
        },
        {
          date: {
            lte: date,
          },
        },
      ],
    });
  });

  it('converts filter with lt, lte, gt, gte conditions on the same field and flat filter', () => {
    const date = new Date();
    expect(
      toPrismaWhere({
        date_gt: date,
        date_gte: date,
        date_lt: date,
        date_lte: date,
        name: 'someName',
      }),
    ).toEqual({
      AND: [
        {
          date: {
            gt: date,
          },
        },
        {
          date: {
            gte: date,
          },
        },
        {
          date: {
            lt: date,
          },
        },
        {
          date: {
            lte: date,
          },
        },
      ],
      name: 'someName',
    });
  });

  it('converts filter with ids', () => {
    expect(
      toPrismaWhere({ids: [1, 2]}),
    ).toEqual({
      id: {
        in: [1, 2],
      },
    });
  });

  it('search', () => {
    expect(
      toPrismaWhere({q: 'bob'}),
    ).toEqual({
      search: {
        contains: 'bob',
      },
    });
  });
});

