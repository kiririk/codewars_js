//https://www.codewars.com/kata/is-integer-array/train/javascript
function isIntArray(arr) {
  console.log(arr);
  if ((typeof arr != 'object') || (arr==null)) return false;
  else return arr.length == arr.filter(el => (isNaN(el) || (el === undefined) || (typeof el == 'string')) ? false : true)
            .filter(el => el == parseInt(el) ? true : false).length;
}

//function isIntArray(arr) {
//  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
//}

//let isIntArray = arr => !!arr && arr.every(Number.isInteger);
