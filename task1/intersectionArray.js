/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {
  const map = {};
  const result = [];
  for (const int of left) {
    if (map[int]) {
      map[int]++;
    } else {
      map[int] = 0;
    }
  }

  for (const int of right) {
    if (map[int] !== undefined) {
      result.push(int);
    }
  }
  return result;
}

console.log(intersection(
  [1, 2, 3, 4, 5],
  [2, 8, 3]
));
