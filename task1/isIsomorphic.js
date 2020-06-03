function isIsomorphic(left, right) {
  return [...right].every((_, i) => right.indexOf(right[i]) === left.indexOf(left[i]));
}


console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true
