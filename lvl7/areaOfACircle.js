// https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript

var circleArea = function(radius) {
  if((radius <= 0) || (typeof radius !== 'number')){
    return false
  } else {
    let area = Math.PI * radius **2
    return Number(area.toFixed(2))
  }
};