// https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/javascript

function factory(x){
  // Prep , Edge Case, Complexity
  // Given: number
  // Return: number's Array
  // Example: 5 -> [1,2,3] -> [5,10,15]
  // What happens if I input a invalid data type?
  // What haapens if i input nothing?
    // psuedo: create for loop
    // multiply each element in the array by the param
    // return an array of the numbers 
  // Time complexity: o(n)
  
  let arr = arr => {
    return arr.map(el => el * x)
  }
  return arr
}