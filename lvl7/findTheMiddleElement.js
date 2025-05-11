// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme (triplet) {
  let newArr = []
  triplet.forEach(el => newArr.push(el))
  newArr.sort((a,b) => a - b)
  let middle = (Math.ceil(triplet.length/2)) - 1
  let value = newArr[middle]
  return triplet.indexOf(value)
}