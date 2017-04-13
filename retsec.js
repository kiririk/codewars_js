function reverseByCenter(s){
	return (s.length%2 == 1) 
	? s.substr(-(s.length/2 - 0.5)) + s[s.length/2 - 0.5] + s.substr(0, s.length/2 - 0.5)
	: s.substr(-(s.length/2)) + s.substr(0, s.length/2);
}

console.log(reverseByCenter('sake'));
console.log(reverseByCenter('hello'));
