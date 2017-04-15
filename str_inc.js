//https://www.codewars.com/kata/string-incrementer/train/javascript/

const pad = (str, max) => str.length < max ? pad("0" + str, max) : str;
const inc = str => pad((Number(str)+1).toString(), str.length);

function incrementString (strng) {
	const toString = x => x == null ? '' : x[0];
	let func_name = toString(strng.match(/\D+/ig)),
		func_count = toString(strng.match(/\d+/ig));
	return func_name+inc(func_count);
}

// function incrementString (strng) {
//   var m = strng.match(/^(\w*?)(\d*)$/);
//   var next = (parseInt('0'+m[2], 10) + 1) + '';
//   return m[1] + m[2].slice(0, -next.length) + next;
// }

// function incrementString(input) {
//   if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//   return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }

// function incrementString(input) {
//   return input.replace(/\d*$/, function(n) {
//     var x = ~~n + 1
//     return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
//   })
// }
