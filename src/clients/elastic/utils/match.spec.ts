import {describe, it, expect} from 'jest-without-globals';
import match from './match';

// yarn test --testPathPattern match

describe('match', () => {
  it('constricts matcher without fuzzyness', () => {
    expect(
      match('field', 'value'),
    ).toEqual({
      match: {
        field: {
          query: 'value',
        },
      },
    });
  });

  it('constricts matcher with fuzzyness 1', () => {
    expect(
      match('field', 'value', 1),
    ).toEqual({
      match: {
        field: {
          query: 'value',
          fuzziness: 1,
        },
      },
    });
  });
});
