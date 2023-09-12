// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let n=[];
  for( key in recipe){
    if (key in available){
      let num=Math.floor(available[key]/recipe[key]);
      n.push(num);
      } else{ return 0;}
        } 
  return parseInt(n.sort((x,y)=>x-y).slice(0,1));
}