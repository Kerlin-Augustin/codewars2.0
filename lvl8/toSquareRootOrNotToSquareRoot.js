// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  let newArr = []
  let square = 0
  console.log(Number.isInteger(Math.sqrt(array[0])))
  for(let i =0; i < array.length; i++){
    if(Number.isInteger(Math.sqrt(array[i]))){
      newArr.push(Math.sqrt(array[i]))
    } else {
      
      newArr.push(array[i] * array[i])
    }
  }
  return newArr;  
}