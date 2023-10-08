// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  return function (multiply){
    return arr.map((x) => x * multiply )
  }
}