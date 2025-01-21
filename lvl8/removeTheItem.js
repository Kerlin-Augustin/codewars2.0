function shortenToDate(longDate) {
  // PREP, Edge Case, Complexity
  // Param (given): string
  // Return: string
  // Example: Friday May 2, 9am -> Friday May 2
  // Edge Case: Will the format always be arranged this way?
  // Psuedo: split the string into an array
    // loop through the array
    // push every index of the array into a another array
    // when the loop reaches the , exit the array
    // join the new array together
    // return new array
  // Time Complexity: o(n)
  
  let newArray = []
  longDate = longDate.split('')
  console.log(longDate)
  for(let i = 0; i < longDate.length; i++){
    if(longDate[i] === ',') break
    newArray.push(longDate[i])
  }
  return newArray.join('')
}