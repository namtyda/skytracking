function getAnagrams(list) {
  const res = {};

  for (const word of list) {
    const tmp = [...word].sort().join('');
    if (res[tmp]) {
      res[tmp].push(word)
    } else {
      res[tmp] = [word];
    }
  }
  return Object.values(res);
}

const inputList = [
  'кот', 'пила', 'барокко',
  'стоп', 'ток', 'кошка',
  'липа', 'коробка', 'пост',
];

console.log(getAnagrams(inputList));
