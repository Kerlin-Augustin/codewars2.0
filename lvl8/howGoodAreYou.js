function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for(let i = 0; i < classPoints.length; i++){
    sum += classPoints[i]
  }
  sum = sum/classPoints.length
  if(sum > yourPoints){
    return false
  } else {
    return true
  }
}