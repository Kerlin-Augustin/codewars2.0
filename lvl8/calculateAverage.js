// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if(array.length === 0) return 0
  let nums = array.reduce((a,b) => a+b)
  return nums/array.length
}