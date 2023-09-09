// https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

function trim(str, size) {
  let arr = []
  let newArr = []
   if (str.length <= size){
    return str
  } else if (size <= 3){
    for(let i = 0; i < size; i++){
      arr.push(str.charAt(i))
    }
    arr.push('...')
    newArr = arr.join('')
    return newArr
  } else if (str.length > size){
    for(let i = 0; i < size; i++){
    arr.push(str.charAt(i))
    }
    arr.pop()
    arr.pop()
    arr.pop()
    arr.push('...')
    newArr = arr.join('')
    return newArr
    }
  }