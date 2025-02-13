// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

function largest(n, array) {
  // Find the n highest elements in a list
  // given: two params -> num, nums[]
  // return: nums[]
  // example: 2, [1,4,2,3] -> [4,3]
  // Edge Case: Skipped
  // Edge Case: Skipped
  // Psuedo: declare an empty arr
    // using sort method sort the array in descending order
    // take the first n elements and put it into an arr
    // return new arr
  // Time Complexity: ???
  let newArr = []
  array.sort((a,b) => {
    return a-b
  })
  for(let i = 0; i < n; i++){
    let el = array.pop(i)
    newArr.push(el)
  }
  return newArr.sort((a,b) => a-b)
}