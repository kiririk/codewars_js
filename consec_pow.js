function sumDigPow(a, b) {
	var result = [];
	for (var i = a; i <= b; i++) {
  		var str = i.toString();
  		var summ = 0;
  		for (var letter = 0, pow = 1; letter < str.length; letter++, pow++) {
  			summ += Math.pow(str[letter],pow);
  		}
  		if (summ == i) result.push(i);
	}
	return result;
}

console.log(sumDigPow(1, 10000000));

/*
function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
*/