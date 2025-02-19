// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  // given: any[]
  // return: any[]
  // example: Skip
  // Edge Case: Skip
  // psuedo: Skip
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  
  let newArr = []
  let obj = {zero: 0}
  
  arr.forEach(el => {
    if(el === 0){
      obj.zero++
    } else {
      newArr.push(el)
    }
  })
  while(obj.zero > 0){
    newArr.push(0)
    obj.zero--
  }
  return newArr
}