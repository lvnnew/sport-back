export const textFields = (fieldNames: string[]) => fieldNames.reduce((accum, field) => {
  accum[field] = {
    // type: 'keyword',
    type: 'text',
    // fielddata: true,
  };

  return accum;
}, {});

export const keywordFields = (fieldNames: string[]) => fieldNames.reduce((accum, field) => {
  accum[field] = {
    type: 'keyword',
  };

  return accum;
}, {});

export const dateFields = (fieldNames: string[]) => fieldNames.reduce((accum, field) => {
  accum[field] = {
    type: 'date',
  };

  return accum;
}, {});

export const integerFields = (fieldNames: string[]) => fieldNames.reduce((accum, field) => {
  accum[field] = {
    type: 'integer',
  };

  return accum;
}, {});

export const booleanFields = (fieldNames: string[]) => fieldNames.reduce((accum, field) => {
  accum[field] = {
    type: 'boolean',
  };

  return accum;
}, {});
