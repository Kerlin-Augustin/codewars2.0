// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    let count = 0
    for(let val of x){
      if(val === 'good'){
        count++
      }
      if(count > 2){
        break
      }
    }
    if(count === 0){
      return 'Fail!'
    } else if(count > 2){
      return 'I smell a series!'
    } else if(count <= 2) {
      return 'Publish!'
    }
  }