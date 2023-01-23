import {describe, it, expect} from 'jest-without-globals';
import matchPhrase from './matchPhrase';

// yarn test --testPathPattern matchPhrase

describe('matchPhrase', () => {
  it('constricts matcher', () => {
    expect(
      matchPhrase('field', 'value'),
    ).toEqual({
      match_phrase: {
        field: 'value',
      },
    });
  });
});
