// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let newArr = [...nums1, ...nums2]
  newArr = newArr.sort((a,b) => a - b)
  let len = newArr.length
  if(!(len % 2 === 0)){
      return newArr[Math.floor(len/2)]
  } else {
      return (newArr[len/2] + newArr[len/2 - 1]) / 2
  }
};