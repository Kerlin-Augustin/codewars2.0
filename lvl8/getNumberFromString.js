// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

function getNumberFromString(s) {
    // given a string
    // return a number
    // example: he110 -> 110
    // what happens if i input a num
    // what happens if i input nothing
    
    // declare a empty sting var
    // iterate over the string
      // if the index of string === a num add it to the string var
    // turn the string var into a num
    // return the number
    
    // time complexity: o(n)
    // space complexity: o(1)
    
    let str = ''
    for(let val of s){
      if(/[0-9]/.test(val)){
        str += val
      }
    }
    return Number(str)
  }