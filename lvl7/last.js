// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last(...args) {
  if (args.length === 1) {
      let item = args[0];

      if (Array.isArray(item) || typeof item === "string") {
          return item[item.length - 1];
      }
  }
  
  return args[args.length - 1];
}