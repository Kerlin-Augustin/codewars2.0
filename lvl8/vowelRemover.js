function shortcut (string) {
  let strings = string.split('')
  let noVowel = strings.filter((str) => {
    if(str !== 'a' && str !== 'e' && str !== 'i' && str !== 'o' && str !== 'u'){
      return str
    }   
  })
  return noVowel.join('')
}