// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
  // given: map numbers[]
  // return: string[]
  // example: Skip
  // edge case: skip
  // base case: skip
  // pseudo: declare empty arr var
    // loop through data
    // if index 0 >= 55 && index 1 > 7 push "senior"
    // else push "open"
    // return arr
  // time complexity: O(n)
  // space complexity: O(n)
  
  let arr = []
  for(let i = 0; i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      arr.push('Senior')
    } else {
    arr.push('Open')
    }
  }
  return arr
}