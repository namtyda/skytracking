/** Сжатие целочисленного массива */
function zip(...values) {
  const result = [];
  let index = 0;
  values.sort((a, b) => a - b);

  for (let i = 0; i <= values.length; i++) {
    if (values[i] - i + index !== values[index]) {
      if (values[i - 1] === values[index]) {
        result.push(String(values[index]));
      } else {
        result.push(String(values[index] + '-' + values[i - 1]));
      }
      index = i;
    }
  }
  return result.join(',');
}

console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10"
