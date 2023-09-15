// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
  if(a.length < b.length){
    return `${a}${b}${a}`
  } else if(a.length > b.length){
    return `${b}${a}${b}`
  }
}