/**
 * Перенос нулей в конец массива
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {
  let j = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      [input[i], input[j]] = [input[j], input[i]];
      j++;
    }
  }
  return input;
}


// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]
console.log(zsort([0, 0, 1])); // [1, 0, 0]
console.log(zsort([1, 2, 0])); // [1, 2, 0]

