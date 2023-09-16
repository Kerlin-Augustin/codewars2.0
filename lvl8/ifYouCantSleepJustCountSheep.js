// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

function countSheep(num){
  let arr = []
  for(let i = 0; i < num; i++){
    arr.push(`${i + 1} sheep...`)
  }
  return arr.join('')
}