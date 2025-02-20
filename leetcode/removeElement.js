// https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // given: nums[], num
  // return: num
  // example: [1,2,3], 2 -> [1,3,_]
  // Edge Case: What happens if I input a incorrect data type?
  // Edge Case: What happens if I input nothing?
  
  let counter = 0
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== val){
          nums[counter] = nums[i]
          counter++
      }
  }
  return counter
};