// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  let sum = 0
  for(let i = 0; i < marks.length; i ++){
    sum += marks[i]
  }
  sum = sum / marks.length
  return Math.floor(sum)
}