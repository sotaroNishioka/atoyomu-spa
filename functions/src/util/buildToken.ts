import tokenize from './tokenize';

const buildTokenMap = (...words: string[]) => {
  const tokenMap: { [k: string]: boolean } = {};
  tokenize(...words).forEach((token) => {
    tokenMap[token] = true;
  });
  return tokenMap;
};

export default buildTokenMap;
