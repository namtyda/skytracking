/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
function missing(values) {
  let curr = 1;

  for (let i = 2; i <= values.length + 1; i++) {
    curr += i;
    curr -= values[i - 2];
  }
  return curr;
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // 5
