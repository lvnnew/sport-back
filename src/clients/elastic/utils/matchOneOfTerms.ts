const matchOneOfTerms = (field: string, values: string[]) => ({
  bool: {
    should: values.map(value => ({
      term: {
        [field]: value,
      },
    })),
    minimum_should_match: 1,
  },
});

export default matchOneOfTerms;
