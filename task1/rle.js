/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let prev = '';
  let count = 1;
  let result = '';

  for (const letter of value) {
    if (prev === letter) {
      count++;
    } else {
      result += (count > 1 ? prev + count : prev);
      prev = letter;
      count = 1;
    }
  }
  return result += (count > 1 ? prev + count : prev);
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
