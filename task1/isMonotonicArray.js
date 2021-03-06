/** Проверка массива на монотонность */
function isMono(...values) {
  const inc = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }
  const dec = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) return false;
    }
    return true;
  }
  return inc(values) || dec(values);
}

console.log(isMono(0, 1, 5, 9, 15)); // true
console.log(isMono(0, 1, 1, 5, 9, 9, 15)); // true
console.log(isMono(15, 8, 4, 2, 1)); // true
console.log(isMono(0, 1, 5, 15, 4)); // false
