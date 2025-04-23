// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/typescript

export const distinct = (a: number[]): number[] => {
  //   given: nums array
  //   return: nums array
  
  let arr: number[] = []
  for(let i = 0; i < a.length; i++){
    if(!arr.includes(a[i])){
      arr.push(a[i])
    }
  }
  
  return arr
}