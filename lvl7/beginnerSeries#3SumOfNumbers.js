// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b){
  if(a === b) return a
  
  let sum = 0
  
  if(a > b){
    for(let i = b; i <= a; i++){
      sum += i
    }
    return sum
  }
  
  if(b > a){
    for(let i = a; i <= b; i++){
      sum += i
    }
    return sum
  }
}