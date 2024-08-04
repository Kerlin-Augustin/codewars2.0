// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

function solve(s){
    // given a string
    // return a number
    // example: h1n12 -> 12
    
    // declare a empty string var
    // declare a empty number var
    // iterate over string param
      // if index of string === number add it to the string
      // if the index after the number does not === number parse the string into a number and save it
    // return number
    
    let largest = 0
    let str = ''
    
    for(let i = 0; i < s.length; i++){
      if(s[i] <= '9' && s[i] >= '0'){
        str += s[i]
      } else {
        if(str.length > 0){
        largest = Math.max(largest, Number(str))
        str = ''
        }
      }
    }
    if(str.length > 0){
        largest = Math.max(largest, Number(str))
      }
    return largest
  };