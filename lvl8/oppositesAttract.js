// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 === 1){
    return true
  } else if(flower1 % 2 === 1 && flower2 % 2 === 0){
    return true
  } else if(flower1 % 2 === 0 && flower2 % 2 === 0){
    return false
  } else if(flower1 % 2 === 1 && flower2 % 2 === 1){
    return false
  }
}