// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/typescript

String.prototype.toJadenCase = function () {
  // PREP, Edge Case, Complexity
  // Given (param): string
  // Return: string
  // example: Hello world -> Hello World
  // What happens if we input nothing?
  // What happens if we input a invalid data type?
  // Psuedo: split the string into an array of words
    // then do toUpperCase to the first index of every word
    // then join the array back into a string
  // Complexity: o(n)
  
  console.log(this.split(' '))
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}