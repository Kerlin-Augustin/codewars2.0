// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s){
    // Function will return the cleaned string
   let str = ''
  
   for(let val of s){
     if(!(val >= '0') || !(val <= '9')){
       str += val
     }
   }
   return str
  }