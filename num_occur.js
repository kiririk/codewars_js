Array.prototype.numberOfOccurrences = function() {
	var counter = 0;
	for (var i = 0; i < this.length; i++) {
		if (this[i] == arguments[0]) counter++;
	}
	return counter;
}

var arr = [0,1,2,2,3];
console.log(arr.numberOfOccurrences(0) === 1);
console.log(arr.numberOfOccurrences(4) === 0);
console.log(arr.numberOfOccurrences(2) === 2);
console.log(arr.numberOfOccurrences("a") === 0);