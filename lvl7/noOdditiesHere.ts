// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/typescript

export function noOdds(values: number[]): number[] {
  return values.filter(el => el % 2 === 0)
}
