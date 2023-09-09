// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  let arr = []
  let sum = 0
  for(let i = 0; i < limit; i++){
    sum += integer
    if(sum <= limit){
      arr.push(sum)
    }
 }
  return arr
}
