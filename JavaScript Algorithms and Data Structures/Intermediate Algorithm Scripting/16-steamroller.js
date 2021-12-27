// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
  let newArr = [];
  arr.forEach(function flatten(item) {
    if (!Array.isArray(item)) {
      newArr.push(item);
    }
    else {
      return item.map(flatten)
    }
  })
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);