// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

function  calculateAge(birth,year) {

  if(birth - year === -1){
    return 'You are 1 year old.'
  } else if(birth - year === 1){
    return 'You will be born in 1 year.'
  } else if(birth < year){
    return `You are ${Math.abs(birth - year)} years old.`
  } else if(birth > year){
    return `You will be born in ${birth - year} years.`
  } else if(birth === year){
    return 'You were born this very year!'
  } 
}