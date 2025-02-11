// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss){
  // Given: two params - an object, string
  // return: a string
  // example: {'john': 7, 'jane': 9, "doe": 1}, 3 -> 'Nice Work Champ!'
  // Edge Case: What happens if I input nothing?
  // Edge Case: What happens if I input a invalid data type?
  // Psuedo: declare var of boss score doubled
    // take the objects values and put it into an array
    // declare a var with the length of that array
    // using the reduce method on the array to get total sum
    // then divide that number by length of the array
    // compare that number <= 5
    // if <= 5 return 'Get Out Now!'
    // else return 'Nice Work Champ!'
  // Time Complexity: O(n)
  
  let coworkerScores = Object.values(meet)
  let totalCoworker = coworkerScores.length
  let sumTotal = coworkerScores.reduce((a,b) => {
    return a + b
  })
  sumTotal += meet[boss]
  let answer = sumTotal / totalCoworker
  if(answer <= 5) return 'Get Out Now!'
  return 'Nice Work Champ!'
}
