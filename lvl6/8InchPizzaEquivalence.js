// https://www.codewars.com/kata/599bb194b7a047b04d000077/train/javascript

function howManyPizzas(n) {
  // Given: number
  // Return: string
  // Example: 16 -> 'pizzas: 4, slices: 0'
  // Edge Case: What happens if nothing is inputed?
  // Edge Case: What happens if I input the invalid data type?
  // Psuedo: declare var (area) and set it equal to (param/2)^2 * 3.14
    // declare var (pizza8) and set it equal to (4^2) * 3.14
    // if(n === 0) return 'pizzas: 0, slices: 0'
    // let full = Math.floor(area/pizza8)
    // let slice = area/pizza8
    // slice = slice.toString()
    // slice.split('')
    // let period = slice.indexOf(.)
    // slice = slice.slice(period).join('')
    // slice = Number(slice)
    // if(slice >.05 || slice <= .15) slice = 1
    // if(slice <= 25) slice = 1
  
  let area = ((n/2)**2) * 3.14
  let pizza8 = (4**2) * 3.14
  if(n === 0) return 'pizzas: 0, slices: 0'
  let full = Math.trunc(area/pizza8)
  let slices = area/pizza8
  slices = slices.toString()
  slices = slices.split('')
  let period = slices.indexOf('.')
  if(period === -1) return `pizzas: ${full}, slices: 0`
  slices = slices.slice(period).join('')
  slices = Number(slices)
  if(slices <= .05) return `pizzas: ${full}, slices: 0`
  if(slices <= .15) return `pizzas: ${full}, slices: 1`
  if(slices <= .275) return `pizzas: ${full}, slices: 2`
  if(slices <= .4) return `pizzas: ${full}, slices: 3`
  if(slices <= .525) return `pizzas: ${full}, slices: 4`
  if(slices <= .65) return `pizzas: ${full}, slices: 5`
  if(slices <= .775) return `pizzas: ${full}, slices: 6`
  if(slices <= .9) return `pizzas: ${full}, slices: 7`
  
}