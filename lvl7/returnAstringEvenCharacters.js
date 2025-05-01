// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

function evenChars(string) {
  if(string.length < 2 || string.length > 100) return "invalid string"
  let arr = []
  for(let i = 1; i < string.length; i += 2){
    arr.push(string[i])
  }
  
  return arr
}