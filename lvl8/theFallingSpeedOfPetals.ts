// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/typescript

export function sakuraFall(v: number): number {
  if(v <= 0) return 0
  let distance = 5 * 80
  return distance/v
}