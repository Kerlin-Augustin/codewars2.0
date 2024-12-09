https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

export function hello(name = ''): string {
  // given: string
  // return: string
  // example: kerlin -> Hello, Kerlin
  // Psuedo: if not given an parameter return Hello, World!
    //      else let firstLetter = parameter[0].toUpperCase() 
    //           parameter.shift()
    //.          parameter.unshift(firstLetter)
    //           return Hello, ${parameter}
  // what if I pass in a number?
  // What if someone passes in a sentence?
  // time complexity: o(n)
  
  if(!name){
    return "Hello, World!"
  } else {
    let firstLetter = name[0].toUpperCase()
    let lowerCaseName: any = name.toLowerCase()
    lowerCaseName = lowerCaseName.split('')
    lowerCaseName.shift()
    lowerCaseName.unshift(firstLetter)
    lowerCaseName = lowerCaseName.join('')
    return `Hello, ${lowerCaseName}!`
  }
    
}