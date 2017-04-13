function findNextSquare(sq) {
	function getDecimal(num) {
  		return num - Math.floor(num);
	}
	var origin = Math.sqrt(sq);
  	if (getDecimal(origin) == 0) {
  		return Math.pow((origin+1),2);	
  	}	else {
  		return -1;
  	}
}

console.log(findNextSquare(625))
console.log(findNextSquare(9579))