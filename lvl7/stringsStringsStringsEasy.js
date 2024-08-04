// https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
    function () { return JSON.stringify(this); }
// Recover toString() here :)