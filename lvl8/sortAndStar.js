// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
  let arr = []
  let secArr = []
  let sorted = s.sort()
  arr.push(sorted[0])
  arr = arr.join('')
  for(let i = 0; i < arr.length; i++){
    secArr.push(arr.charAt(i) + '***')
  }
  secArr = secArr.join('')
  secArr = secArr.split('')
  secArr.pop()
  secArr.pop()
  secArr.pop()
  secArr = secArr.join('')
  return secArr
}