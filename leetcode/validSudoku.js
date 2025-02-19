// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // given: nums[][]
  // return: boolean
  // example: Skip
  // Edge Case: Skip
  // Psuedo: instantiate a set
      // declare var row = arr.length
      // declare var column = arr[0].length
      // loop through first array
      // loop through second array
      // if element is in set return false
      // else add it to the set
      // clear set to nothing
  let set = new Set()
  let row = board.length
  let column = board.length
  for(let i = 0; i < row; i++){
      for(let j = 0; j < column; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
      set.clear()
      let counter = 0
      for(let k = 0; k < column; k++){
          if(board[k][i - counter] === '.') continue
          // console.log(board[k][i - counter])
          if(set.has(board[k][i - counter])){
              return false
          } else {
              set.add(board[k][i - counter])
          }
      }
      counter++
      set.clear()

  }
  for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 3; i < 6; i++){
      for(let j = 3; j < 6; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 6; i < 9; i++){
      for(let j = 6; j < 9; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 3; i < 6; i++){
      for(let j = 0; j < 3; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 6; i < 9; i++){
      for(let j = 0; j < 3; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 0; i < 3; i++){
      for(let j = 3; j < 6; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 0; i < 3; i++){
      for(let j = 6; j < 9; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 3; i < 6; i++){
      for(let j = 6; j < 9; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()

  for(let i = 6; i < 9; i++){
      for(let j = 3; j < 6; j++){
          if(board[i][j] === '.') continue
          // console.log(board[i][j])
          if(set.has(board[i][j])){
              return false
          } else {
              set.add(board[i][j])
          }
      }
  }
  set.clear()
  return true
  // console.log(board)
};