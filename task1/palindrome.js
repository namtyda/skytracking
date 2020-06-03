/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
  const normaliseString = value.toLocaleLowerCase().split(' ').join('');
  let left = 0, right = normaliseString.length - 1;
  while (left <= right) {
    if (normaliseString[left] !== normaliseString[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true
