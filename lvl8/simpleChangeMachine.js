// https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript

function changeMe(moneyIn){
    // Write your function here
    // given a string 
    // return a string
    // example: '1' -> '20p 20p 20p 20p 20p'
    
    // if moneyIn.includes(£) divide it by 20 then multiple by 100
    // if moneyIn.includes(p) 
    
    if(moneyIn === '£5'){
      return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
    } else if(moneyIn === '£2'){
      return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    } else if(moneyIn === '£1'){
      return '20p 20p 20p 20p 20p'
    } else if(moneyIn === '50p'){
      return '20p 20p 10p'
    } else if(moneyIn === '20p'){
      return '10p 10p'
    } else if(moneyIn !== '£5' || moneyIn !== '£2' || moneyIn !== '£1' || moneyIn !== '50p' || moneyIn !== '20p'){
      return moneyIn
    } else {
      return 'Money'
    }
  }