// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm){
  if (mm < 40) {
       return `You need to give your plant ${40 - mm}mm of water`
  } else if(mm >= 40) {
       return "Your plant has had more than enough water for today!"
  };
}