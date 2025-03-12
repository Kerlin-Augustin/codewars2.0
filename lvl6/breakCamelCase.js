// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  if(string.length === 0) return ''
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      string[i] = " " + string[i]
    }
  }
  return string.join('')
}