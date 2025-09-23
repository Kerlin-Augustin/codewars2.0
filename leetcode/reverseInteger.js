// https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x < 0){  
  x = Math.abs(x)  
  x = x
      .toString()
      .split('')
      .reverse()
      .join('')
  if(-Number(x) <= -(2 ** 31 - 1)) return 0
  return -Number(x)   
  } else {
  x = x
      .toString()
      .split('')
      .reverse()
      .join('')
  if(Number(x) >= (2 ** 31)) return 0
  return Number(x)
  }
};