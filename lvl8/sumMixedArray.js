// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x){
    // given a mixed array
    // return a num
    // example: [1,2,'3'] -> 6
    
    // what happens if i input a invalid data type
    // what happens if i input nothing
    
    // declare a empty nums var
    // iterate over thet array param
    // add the value of the element to the num var
      // if the element is not of type num turn it into a num
      // add the num to the num var
    // return the num var
    
    // time complexity: o(n)
    // space complexity: o(1)
    
    let sum = 0
    x = x.map(el => {
      return Number(el)
    })
    
    x.forEach(el => {
      sum += el
    })
    
    return sum
    
  }