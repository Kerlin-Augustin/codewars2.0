// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
  let map = new Map()
  console.log(m)
  for (let i = 0; i < arr.length; i++) {
    if (map.has(m - arr[i])) {
      console.log(map.get(arr[i]))
      return [map.get(m - arr[i]), map.get(m - arr[i])]
    } else {
      console.log(map)
      map.set(arr[i], i)
    }
  }
}