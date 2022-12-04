import {calculateRetryTime} from './utils';
import {describe, expect} from 'jest-without-globals';

// yarn test -t 'calculateRetryTime'

describe('calculateRetryTime', () => {
  let retryTime = 20 * 1000;

  it('exponential growth', () => {
    for (let i = 0; i <= 10; i++) {
      const newRetryTime = calculateRetryTime(retryTime);

      expect(retryTime).toBeLessThan(newRetryTime);

      retryTime = newRetryTime;
    }
  });
});
