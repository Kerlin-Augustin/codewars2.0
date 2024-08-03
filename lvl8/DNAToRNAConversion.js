// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    // given a string
    // return a string
    // GCAT -> GCAU
    
    // what happens if I input nothing?
    // what happend if I input a invalid data type?
    
    // delcare a empty string var
    // map method
      // if an el === 'T' turn it into a 'U'
    // return new string
    
    // time complexity: o(n)
    // space complexity: o(n)
    
    let end = 0
    let rna = []
    
    let dnaChar = dna.split('')
    
    while(end < dnaChar.length){
      if(dnaChar[end] === 'T'){
        rna.push('U')
      } else {
      rna.push(dnaChar[end])
      }
      end++
    }
    return rna.join('')
  }