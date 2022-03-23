export default <T>(collection: T[], page = 1, numItems = 10) => {
  if (!Array.isArray(collection)) {
    throw new TypeError(`Expect array and got ${typeof collection}`);
  }

  const offset = (page - 1) * numItems;
  const paginatedItems = collection.slice(offset, offset + numItems);

  return {
    data: paginatedItems,
    numItems,
    page,
    total: collection.length,
    totalPages: Math.ceil(collection.length / numItems),
  };
};
