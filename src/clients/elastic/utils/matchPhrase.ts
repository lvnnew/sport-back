const matchPhrase = (field: string, value: string) => ({
  match_phrase: {
    [field]: value,
  },
});

export default matchPhrase;
