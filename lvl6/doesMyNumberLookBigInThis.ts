// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript

export function narcissistic(value: number): boolean {
  let power: number = value.toString().length
  let char: string[] = value.toString().split('')
  let sum = 0
  char.forEach(el => {
    return sum += Number(el) ** power
  })
  if(sum === value) return true
    return false
}