// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums){
  if(nums === null || nums.length === 0) return []
  
  nums = nums.sort((a,b) => {
    return a - b
  })
  
  return nums
}