// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

function elevator(left, right, call){
  if(left === right){
  return 'right'
  } else if(left === call){
    return 'left'
  } else if(right === call){
    return 'right'  
  } else if(left > right && left < call){
    return 'left'
  } else if(right > left && right < call){
    return 'right'
  } else if(left > call && left < right){
    return 'left'
  } else if(Math.abs(left - right) === 1 || Math.abs(left - right) === 2){
    return 'right'
  }
}