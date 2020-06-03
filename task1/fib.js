/**
 * Напишите функцию, которая возвращает n-ую запись в последовательности,
 * где n — это число, которое вы передаёте в качестве аргумента функции.
 * @param   {number} n
 * @returns {number}
 */


function fibonacci(n, obj = {}) {
  if (obj[n]) {
    return obj[n];
  }
  if (n <= 2) {
    return 1;
  }
  return obj[n] = fibonacci(n - 1, obj) + fibonacci(n - 2, obj)
}

console.log('3 ->', fibonacci(3)); // 2
console.log('7 ->', fibonacci(7)); // 13
