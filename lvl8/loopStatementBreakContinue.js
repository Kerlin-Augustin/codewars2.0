// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/solutions/javascript

function grabDoll(dolls){
  // PREP, EDGE CASE, COMPLEXITY
  // Given: string array
  // Return: string array
  // Example: Skipped
  // Edge Cases: Skipped
  // Time Complexity: Skipped
  
  var bag=[];
  for(let i = 0; i < dolls.length; i++){
    if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
      bag.push(dolls[i])
    } else {
      continue
    }
    
    if(bag.length === 3) break
  }
  
  return bag;
}