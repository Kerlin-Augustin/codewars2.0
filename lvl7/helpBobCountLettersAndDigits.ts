// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/typescript

export function countLettersAndDigits(input: string): number {
  return input.replaceAll(/[^a-zA-Z0-9]/g, '').length
}