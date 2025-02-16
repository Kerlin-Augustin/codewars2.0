/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// https://leetcode.com/problems/move-zeroes/description/
/* This method does not solve the problem in the proper constraints but it
   does work if those constraints weren't there. */

var moveZeroes = function(nums) {
  // given: nums[]
  // return: nums[]
  // example: [1,0,3,4] -> [1,3,4,0]
  // Edge Case: What happens if I input a invalid data type?
  // Edge Case: What happens if I input nothing?
  // Psuedo: instansiate a map object
      // declare an new empty []
      // loop through the nums[]
      // if the index of nums[] !== 0 push it into new []
      // else set it into map object
      // take map values and push it into the end of the new []
      // return new arr
  // Time Complexity: O(n)
  // Space Complexity: O(n)

  let map = new Map()
  let endingZero = []
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0){
          map.set(i, nums[i])
      } else {
          endingZero.push(nums[i]) 
      }
  }
  map.forEach(value =>{
      endingZero.push(value)
  })
  return endingZero
}