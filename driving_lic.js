//https://www.codewars.com/kata/driving-license/train/javascript
function driver(data) {
	let date = new Date(data[3]),
		code = (data[2]+'99999').slice(0,5).toUpperCase() +
			date.getFullYear().toString()[2] +
			(0+(date.getMonth()+1+(data[4] == 'F' ? 50 : 0)).toString()).slice(-2) +
			(0+date.getDate().toString()).slice(-2) +
			date.getFullYear().toString()[3] +
			data[0][0] + (data[1].length == 0 ? '9' : data[1][0]) +
			'9AA';
	return code;
}
driver(["John","James","Smith","01-Jan-2000","M"]);
driver(["Johanna","","Gibbs","13-Dec-1981","F"]);
driver(["Andrew","Robert","Lee","02-September-1981","M"]);
