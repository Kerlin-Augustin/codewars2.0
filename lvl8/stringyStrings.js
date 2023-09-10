// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
  let arr = []
 for(let i = 0; i < size; i++){
   if(i % 2){
     arr.push(0)
   } else {
     arr.push(1)
   }
  }
  return arr.join('')
}