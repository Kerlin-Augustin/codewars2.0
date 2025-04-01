// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/typescript

export function multiTable(number:number):string {
  let str = ''
  for(let i = 1; i < 10; i++){
    str += `${i} * ${number} = ${i * number}\n`
  }
  str += `10 * ${number} = ${10 * number}`
  console.log(str)
  return str
}
