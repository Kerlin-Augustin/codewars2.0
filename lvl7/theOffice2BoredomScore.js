// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff){
  //  Given: object
  //  Return: string
  //  Example: Skipped
  //  Edge Case: What happens if I input the invalid data type?
  //  Edge Case: What happens if I input nothing?
  //  Psuedo: declare var named score
    // grab all of the object values and put it into an array
    // use forEach method on arr
    // using if condiditons on corresponding jobs and at points to score var
    // using if conditional find which score corresponds to correct response
  // Time Complexity: O(n)
  
  let score = 0
  let arr = Object.values(staff)
  arr.forEach(el => {
    if(el === 'accounts') score += 1
    if(el === 'finance') score += 2
    if(el === 'canteen') score += 10
    if(el === 'regulation') score += 3
    if(el === 'trading') score += 6
    if(el === 'change') score += 6
    if(el === 'IS') score += 8
    if(el === 'retail') score += 5
    if(el === 'cleaning') score += 4
    if(el === 'pissing about') score += 25
  })
  if(score <= 80) return 'kill me now'
  if(score < 100 && score > 80) return 'i can handle this'
  if(score >= 100) return 'party time!!'
}