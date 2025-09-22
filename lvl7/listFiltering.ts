// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/typescript

export function filter_list(l:Array<any>):Array<number> {
  // Return a new array with the strings filtered out
  // parameter: string and number array
  // return: numbers array
  // use filter method
  // is typeof number
  // return filtered array
  
  return l.filter(el => typeof el === 'number')
  
}