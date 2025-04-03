// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/typescript

export function correctTail(body: string, tail: string): boolean{
  return body[body.length - 1] === tail ? true : false
}