// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
  // given: string
  // return: string
  // example: 'AT' -> 'TA'
  // Edge Case: What happens if I input the incorrect data type?
  // Edge Case: What happens if I input nothing?
  // Base Case: If any letter is not ATCG throw error
  // Base Case: If the length of the string is 0 return 'no data'
  // Pseudo: Skipped
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  
  if(dna.length === 0) return 'no data'
  
  let arr = []
  for(let i = 0; i < dna.length; i++){
    if(dna.charAt(i) === 'A'){
      arr.push('T')
    } else if(dna.charAt(i) === 'T') {
      arr.push('A')
    } else if(dna.charAt(i) === 'C'){
      arr.push('G')
    } else {
      arr.push('C')
    }
  }
  return arr.join('')
}