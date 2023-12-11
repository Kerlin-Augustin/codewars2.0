// https://www.codewars.com/kata/57cc981a58da9e302a000214/solutions/javascript

function smallEnough(a, limit){
  let num = (currentValue) => currentValue <= limit;
  return a.every(num)
 }