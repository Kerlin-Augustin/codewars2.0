// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  return weight/height**2 <= 18.5 ? 'Underweight'
  : weight/height**2 <= 25 ? 'Normal' 
  : weight/height**2 <= 30 ? 'Overweight' 
  : 'Obese'
}