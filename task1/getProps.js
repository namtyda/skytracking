/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
function get(src, path) {
  const pathArr = path.split('.')
  let cur = src;

  for (const prop of pathArr) {
    if (cur[prop] === undefined) {
      return undefined;
    }
    cur = cur[prop];
  }
  return cur;
}

const fixture = {
  foo: {
    bar: [
      { qux: 'bingo' },
    ],
  },
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');
