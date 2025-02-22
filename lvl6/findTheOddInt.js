// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  // given: nums[]
  // return: num
  // example: [1,2,2] -> 1
  // Edge Case: What happens if I get an incorrect data type?
  // Edge Case: What happens if I input nothing?
  // Base Case: if the array is empty throw an error
  // Base Case: if the array is === 1 return the element
  // pseudo: if the array.length === 0 throw error
    // if array.length === 1 return array[0]
    // declare an empty map or object
    // loop through the array
    // for each element in the array add the key and set the value to 0
    // if the key exist increment by 1
    // else set the key to 1
    // loop through the object
    // if the value of any key is not divisible by 2 return that key
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  
  if(A.length === 0) throw new Error('Array empty')
  if(A.length === 1) return A[0]
  
    let obj = {}
    for(let i = 0; i < A.length; i++){
      if(obj[A[i]] === undefined){
        obj[A[i]] = 1
      } else {
      obj[A[i]] += 1
      }
    }
  
    for(let key in obj){
      if(obj[key] % 2 !== 0){
        return Number(key)
      }
    }
  }