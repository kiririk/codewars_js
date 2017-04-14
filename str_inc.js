//https://www.codewars.com/kata/string-incrementer/train/javascript/

const pad = (str, max) => str.length < max ? pad("0" + str, max) : str;
const inc = str => pad((Number(str)+1).toString(), str.length);

function incrementString (strng) {
	const toString = x => x == null ? '' : x[0];
	let func_name = toString(strng.match(/\D+/ig)),
		func_count = toString(strng.match(/\d+/ig));
	return func_name+inc(func_count);
}
