// https://www.codewars.com/kata/570a6a46455d08ff8d001002/solutions/javascript

function noBoringZeros(n) {
  let news = n.toString().split('')
  if(n.toString().split('').length === 1) return n
  for(let i = news.length - 1; i > 0; i--){
    if(news[i] == 0){
      news.pop()
    } else {
      news = news.join('')
      news = Number(news)
      break
    }
  }
  return news
}