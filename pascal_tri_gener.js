//https://www.codewars.com/kata/pascals-triangle/train/javascript
function pascalsTriangle(n) {
	let result = [];
	for (let i = 1; i < n+1; i++) {
		let sub = Array(i).fill(1);
		if (i > 2) {
			for (let j = 1; j < i-1; j++) {
				sub[j] = pre_sub[j-1]+pre_sub[j];
			}
		}
		var pre_sub = sub;
		result = result.concat(sub);
	}
	return result;
}
