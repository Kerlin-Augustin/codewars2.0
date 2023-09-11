// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

function twoHighest(arr) {
  let value = []
  arr.sort((a,b) => b - a)
  if(arr.length <= 1){
    return arr
  } else if(arr.length >= 2){
  value.push(arr[0])
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < arr[0]){
        value.push(arr[i])
      }
    }
    for(let i = 0; i < arr.length; i++){
      if(value.length > 2){
        value.pop()
      }
    }
  }
  return value
}