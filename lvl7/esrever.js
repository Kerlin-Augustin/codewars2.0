// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

reverse = function(array) {
  // given: any[]
  // return: any[]
  // Example: skip
  // Psuedo: declare an empty any[]
    // loop through the array param
    // pop() every index from the param array
    // push() every popped element in the new array
    // return new array
  
   let reversed = []
  for(let i = array.length -1; i >= 0; i--){
    let el = array[i]
    reversed.push(el)
  }
  return reversed
}