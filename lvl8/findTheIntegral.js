// https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript

function integrate(coefficient, exponent) {
  // PREP, Edge Case, Complexity
  // Given (parameter): two params - number, number
  // Return: string
  // Example: 3, 2 -> 1x^3
  // Edge Case: What happens if we input nothing?
  // Edge Case: What happens if we input a invalid data type?
  // Psuedo: add 1 to the exponent
    // then divide the coefficient by the exponent
    // then return string of the new results in this format "nx^y"
  // Time Complexity: o(1)
  
  exponent++
  coefficient = coefficient/exponent
  return `${coefficient}x^${exponent}`
}