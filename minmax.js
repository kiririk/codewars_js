function minMax(arr){
	result = [arr[0],arr[0]];
	for (var i = 0; i < arr.length; i++) {
		(arr[i] <= result[0]) ? (result[0] = arr[i]) : true;
		(arr[i] >= result[1]) ? (result[1] = arr[i]) : true; 
	}
	return result;
}

console.log(minMax([1,2,3,4,5]));
console.log(minMax([2334454,5]));
console.log(minMax([1]));