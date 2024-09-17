
function findInsertion(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));

}
let result = findInsertion([1, 2, 3, 4, 5], [1, 2, 6, 7, 5, 8])
console.log(result);
