// https://www.codewars.com/kata/5977618080ef220766000022/train/typescript

export function usdcny(usd: number): string {
  usd = usd * 6.75
  if(!String(usd).includes('.')){
    return String(usd) + '.00 Chinese Yuan'
  }
  if(String(usd)[String(usd).indexOf('.') + 2] === undefined){
    return String(usd) + '0 Chinese Yuan'
  }
  return `${usd} Chinese Yuan`
}