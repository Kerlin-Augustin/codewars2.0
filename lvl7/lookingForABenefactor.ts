// https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/typescript

export function newAvg(arr: number[], newavg: number): number {

  let reduced = arr.reduce((a,b) => a + b, 0)
  let avgTotal = (arr.length + 1) * newavg
  let total = avgTotal - reduced
  
  if(total <= 0) throw new Error('Expected New Average is too low')
  
  return Math.ceil(total)
}