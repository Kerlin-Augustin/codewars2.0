// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
  if(n < 0) return false
  if(Math.sqrt(n).toString().includes('.')) return false
  return true
}