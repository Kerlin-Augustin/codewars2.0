// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
    // given a string
    // return a array
    // example: abc -> [ab,c_]
    
    // delcare a empty array
    // if the str.length is divisible by 2
      // iterate over the str
      // add two letters at a time to the array
    //return array
    // if the str.length is not divisible by 2
      // iterate over the str
      // add two letters at a time to the array
      // when you get to the last letter add _
    // return array
    
    let arr = []
    if(str.length % 2 === 0){
      for(let i = 0; i <= str.length - 1; i += 2){
        arr.push(`${str[i]}${str[i + 1]}`)
      }
      return arr
    }
    let len = str.length
    let count = 0
    if(str.length % 2 === 1){
      while(count < len - 1){
        arr.push(`${str[count]}${str[count + 1]}`)
        count += 2
      }
      arr.push(`${str[len - 1]}_`)
    }
    console.log(arr)
    return arr
  }