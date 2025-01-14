https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

function contamination(text, char){
  // Prep, Edge cases, Complexity
  // Parameter: Two strings
  // Return: A string
  // Example: "zyxw", 'a' --> 'aaaa'
  // Edge Case: What happens if I am given the incorrect data type?
  // Edge Case: What happens if I am given a string length of greater than 1 for the second parameter?
  // Psuedo: if param1 || param2 === '' return ''
    // Split string into an array
    // Mutate each index of array to param2
    // join array into a string
    // return string
  // Time Complexity: o(n)
  
  if(text === '' || char === '') return ''
  
  let newString = text.split('')
  for(let i = 0; i < newString.length; i++){
    newString[i] = char
  }
  newString = newString.join('')
  return newString
  
}