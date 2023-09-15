// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  let newText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let result = '';
  for (let i = 0; i < newText.length; i++) {
    let charCode = newText.charCodeAt(i) - 96;
    result += charCode + ' ';
  }
  result = result.trim();
  console.log(result);
  return result;
}