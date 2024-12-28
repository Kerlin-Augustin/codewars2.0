// https://www.codewars.com/kata/55d277882e139d0b6000005d/solutions/javascript


function findAverage(nums) {
  //   given: nums array
  //   return: number
  //   example: [1,2,3,4,] -> 10/4 -> 2.5
  //   Edge Case: What happens if theres no input?
  //   Edgae Case: What happens if I'm given only a number?
  //   Psuedo Code: Create a variable of the sum of all the numbers in the array
      // Divide the variable by the length of the array
      // Return the divided number
    
  //   time complexity: o(n)
    
    let sum = 0
    for(let i = 0; i < nums.length; i++){
      sum += nums[i]
    }
    sum = sum/ nums.length
    return sum
  }