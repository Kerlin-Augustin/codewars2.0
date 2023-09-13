// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  let wolf = (animal) => animal === 'wolf'
    if(queue[queue.length - 1] === 'wolf'){
      return "Pls go away and stop eating my sheep"
    } else {
      return `Oi! Sheep number ${queue.length - queue.findIndex(wolf) - 1}! You are about to be eaten by a wolf!`
    }
}
