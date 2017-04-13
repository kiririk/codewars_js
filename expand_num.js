Array.prototype.multi = function(){
	var result = [];
	for (var i = 0, multipl = 1; i < this.length; i++) {
		result.push(this[i]*multipl);
		multipl *= 10;
	}
	return result;
};

function expandedForm(num) {
	return num.toString().split('').reverse().map(el => +el).multi()
            .reverse().filter((el1) => el1>0 ? el1 : false).join(' + ');
}

/*
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
*/