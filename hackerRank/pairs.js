// https://www.hackerrank.com/challenges/pairs/problem

// given: two params -> nums, nums[]
    // return: nums
    // example: 2,[1,5,3,4,2] -> 3
    // Edge Case: What happens if we input nothing?
    // Edge Case: What happens if we input an incorrect data type?
    // Base Case: if the arr is empty throw error
    // Pseudo: instantiate a set with nums param
    // declare counter var
    // loop through the array
    // if the set has index - 1 add incrment counter by 1
    // return counter
    // Time Complexity: O(n + n)
    // Space Complexity: O(n)

    
    function pairs(k, arr) {
  if(arr.length === 0) throw new Error('Empty Array')
  let set = new Set()

  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + k)) {
      counter++
    }
  }
  return counter
}