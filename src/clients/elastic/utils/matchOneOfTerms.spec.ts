import {describe, it, expect} from 'jest-without-globals';
import matchOneOfTerms from './matchOneOfTerms';

// yarn test --testPathPattern matchOneOfTerms

describe('matchOneOfTerms', () => {
  it('constricts matcher', () => {
    expect(
      matchOneOfTerms('field', ['value1', 'value2']),
    ).toEqual({
      bool: {
        should: [
          {
            term: {
              field: 'value1',
            },
          },
          {
            term: {
              field: 'value2',
            },
          },
        ],
        minimum_should_match: 1,
      },
    });
  });
});
