/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
function isBalanced(input) {
  const pattern = {
    '}': '{'
  }
  const stack = [];

  for (const char of input) {
    if (/[\{]/.test(char)) {
      stack.push(char);

    } else if (/[\}]/.test(char)) {
      const open = stack.pop();

      if (!open) return false;
      if (pattern[char] !== open) return false;
    }
  }
  return stack.length === 0;
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false
