function towerBuilder(nFloors) {
	var result = []; var step = '';
	for (var i = 0; i < ((nFloors-1)*2 + 1); i++) {
	 	step+=(i == nFloors-1) ? '*' : ' ';
	}
	var text = '';
	for (i = 0; i < nFloors; i++) {
		text = ''
		result.push(step);
		for (var j = 0; j < step.length; j++) {
			text += (((step[j]==' ') && (step[j+1]=='*')) || ((step[j-1]=='*') && (step[j]==' ')))
			? '*' : step[j];	
		}
		step = text;
	}
	return result;
}

console.log(towerBuilder(6));
console.log(towerBuilder(3));