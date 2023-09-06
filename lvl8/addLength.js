function addLength(str) {
  return str.split(' ').map((e) => `${e} ${e.length}`);
  }

// Second way this function can work

function addLength(str){
  let split = str.split(' ')
  let arr = []
  for(let i = 0; i < split.length; i++){
    arr.push(`${split[i]} ${split.length}`)
  }
  return arr
}