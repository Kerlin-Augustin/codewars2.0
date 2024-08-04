// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/solutions/javascript

function toCsvText(array) {

    array = array.map(el => {
      el = el + '\n'
      return el
    })
    array = array.join('')
    array = array.split('')
    array.pop()
    array = array.join('')
    return array
  }
  