// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/typescript

export function persistence(num: number): number {
  // given: number
  // return number
  // example: 7 -> 0
  // Edge Case: What if I am given an empty input?
  // Edge Case: what if I'm given a non int?
  // Base Case: Single digit numbers return 0
  // Pseudo: create counter variable
  // convert number to string
  // split string into array
  // multiply every number in the array
  // increment counter by 1
  // if product is less than or equal to 9 
  // return counter
  // else repeat process
  // Time Complexity: should be o(n)
  
  let counter = 0
  if(num <= 9) return counter
  
  let product = num
  
  while(product >= 10){
    product = String(product)
    .split('')
    .map(el => Number(el))
    .reduce((a,b) => a * b)
    
    counter++
  }
  
  return counter
  
}