// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

function spEng(sentence){
  // PREP, EDGE CASE, COMPLEXITY
  // Given: String
  // Return: Boolean
  // example: aaenGlishs.l -> true
  // Edge Case: What happens if we input a invalid data type?
  // Edge Case: What happens if we input nothing?
  // Psuedo: if param .toLowerUpper() .includes() the string english return true
  // Complexity: o(n)
  
  return sentence.toLowerCase().includes('english')
  
}