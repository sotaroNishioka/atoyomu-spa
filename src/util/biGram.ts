const biGram = (arg: string) => {
  const value = arg.toLocaleLowerCase();
  const nGrams: string[] = [];
  let index = 0;

  index = value.length - 2 + 1;

  if (index < 1) {
    return nGrams;
  }

  // eslint-disable-next-line no-plusplus
  while (index--) {
    nGrams[index] = value.slice(index, index + 2);
  }

  return nGrams;
};

export default biGram;
