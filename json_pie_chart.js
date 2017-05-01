//http://www.codewars.com/kata/pie-chart/train/javascript
function pieChart(obj) {
    obj = JSON.parse(obj);
	let sum = 0;
	for (let key in obj) sum += obj[key];
	for (let key in obj) obj[key]= obj[key]/(sum/360);
	return JSON.stringify(obj);
}
