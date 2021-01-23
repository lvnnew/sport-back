/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable import/no-commonjs */

const generateData = require('data-generator-retail').default;

export const genData = () => ({
  ...(generateData({serializeDate: false}) as object),
});
