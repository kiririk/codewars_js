function multiplicationTable(row,col){
	var result = [];
	for (var i = 0; i < row; i++) {
		result.push([]);
		var el = i+1;
		for (var j = 0; j < col; j++) {
			result[i].push(el);
			el += (i+1)
		}
	}
	return result;
}

console.log(multiplicationTable(2,2));
console.log(multiplicationTable(3,3));
console.log(multiplicationTable(3,4));
console.log(multiplicationTable(4,4));
console.log(multiplicationTable(2,5));

// out = []
//   for (var i = 1; i <= row; i++)
//   {
//     temp = []
//     for (var j = 1; j <= col; j++)
//     {
//       temp.push(i*j)
//     }
//     out.push(temp)
//   }
//   return out

//const multiplicationTable = (row, col) => Array(...Array(row)).map((_, i) => Array(...Array(col)).map((_, j) => (i + 1) * (j + 1)));