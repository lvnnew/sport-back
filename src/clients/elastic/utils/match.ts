const match = (field: string, value: string, fuzziness?: 0 | 1 | 2) => ({
  match: {
    [field]: {
      query: value,
      fuzziness,
    },
  },
});

export default match;
