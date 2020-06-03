function uniq(values) {
  const result = {};

  for (const int of values) {
    if (result[int]) {
      result[int]++;
    } else {
      result[int] = 0;
    }
  }
  return Object.keys(result).map(Number);
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));