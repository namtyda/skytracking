/**
 * Реализовать функцию суммирования
 * @param  {string} input
 * @return {number}
 */
function calc(input) {
  const stack = [];
  const op = {
    '+': (n, n2) => n + n2,
    '-': (n, n2) => n - n2,
    '*': (n, n2) => n * n2,
    '/': (n, n2) => n / n2
  }
  const array = input.split(' ');

  for (const char of array) {
    if (op[char]) {
      const [n, n2] = [stack.pop(), stack.pop()];
      stack.push(op[char](n, n2));
    } else {
      stack.push(parseFloat(char));
    }
  }
  return Math.floor(Math.abs(stack.pop()));
}


console.log(calc('4 7 + 1 -')); // (4 + 7) - 1 = 10
console.log(calc('3 6 8 * + 10 -')); // 3 + (6 * 8) - 10 = 41
console.log(calc('12 8 5 - / 5 2 * + 14 /'));
console.log(calc('10 5 / 2 10 + - -0.5 *'));
