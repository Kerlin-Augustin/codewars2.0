// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/typescript

export function xo(str: string) : boolean {
  // your code here
  str = str.toLowerCase()
  let countX = 0
  let countO = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'x') countX++
    if(str[i] === 'o') countO++
  }
  return countX === countO ? true : false
}