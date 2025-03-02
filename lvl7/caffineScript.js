// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript

function caffeineBuzz(n){
  // PREP, EDGE CASE, COMPLEXITY
  // given: number
  // return: string
  // example: 10 -> mocha_missing
  // EDGE CASE: SKIPPED
  // COMPLEXITY: SKIPPED
  // PSUEDO: SKIPPED
  
  if((n % 3 === 0 && n % 4 === 0) && n % 2 === 0) return 'CoffeeScript'
  if((n % 3 === 0) && n % 2 === 0) return 'JavaScript'
  if(n % 3 === 0) return 'Java'
  if(n % 3 === 0 && n % 4 === 0) return 'Coffee'
  return 'mocha_missing!'
}