// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
  n = Number(n.toString().split('').sort((a,b) => b - a).join(''))
  return n
}