// https://www.codewars.com/kata/56c5847f27be2c3db20009c3/solutions/typescript

export function subtractSum(n: number): string {
  // given: numnber
  // return: string
  // example: 10 -> 10 - 1 = 9
  
  // edge cases
    // what if I'm given a number that is not on the fruit list
    // what if I input a non number
  
  // first create an array of the fruit in their numerical order (fruitArray)
  // then turn the input into a string
  // then split the string
  // then add all of the numbers together (use reduce method)
  // then subtract the number from the input - 1 and save it into a variable
  // then return fruitArray[variable]
  
  // time complexity: o(n)
  // space complexity: o(n) not sure about this one
  
  let fruitArray: string[] = [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "apple",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "orange",
    "apple",
    "orange",
    "grape",
    "orange",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "apple",
    "pear",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "apple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "cucumber",
    "orange",
    "grape",
    "cherry",
    "apple",
    "cherry",
    "pear",
    "cherry",
    "pear",
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "apple",
    "banana",
    "melon",
    "pineapple",
    "melon",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "apple",
    "grape",
    "orange",
    "grape",
    "cherry",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "apple",
    "kiwi",
    "banana",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple"]
  
  let input: string[] = n.toString().split('')
  let inputArray: number[] = input.map(el => Number(el))
  let reducedArray: number = inputArray.reduce((a,b) => a + b)
  let find: number = n - reducedArray - 1

  let recursive: any = () => {
  // get sum of all digits and subtract the sum from input then repeat that until it is under 100
    
   while(n > 100){
    n -= reducedArray
    reducedArray = n.toString()
      .split('')
      .map(el => Number(el))
      .reduce((a,b) => a + b)
   }
    return fruitArray[n - 1] 
  }
  
  if(fruitArray[find]){
    return fruitArray[find]
  } else {
  return recursive()
    }
}