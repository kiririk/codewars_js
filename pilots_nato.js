function to_nato(words) {
	var alphabet = {
		'a': 'Alfa', 'b': 'Bravo',
		'c': 'Charlie', 'd': 'Delta',
		'e': 'Echo', 'f': 'Foxtrot',
		'g': 'Golf', 'h': 'Hotel',
		'i': 'India', 'j': 'Juliett',
		'k': 'Kilo', 'l': 'Lima',
		'm': 'Mike', 'n': 'November',
		'o': 'Oscar', 'p': 'Papa',
		'q': 'Quebec', 'r': 'Romeo',
		's': 'Sierra', 't': 'Tango',
		'u': 'Uniform', 'v': 'Victor',
		'w': 'Whiskey', 'x': 'Xray',
		'y': 'Yankee', 'z': 'Zulu'
	} 
	var letters = ((words.toLowerCase()).replace(/ /g,'')).split('');
	var result = '';
	for (var i = 0; i < letters.length; i++) {
		if (i == letters.length-1) {
			result += (letters[i] in alphabet) ? alphabet[letters[i]] : letters[i];
		} else {
			result += (letters[i] in alphabet) ? alphabet[letters[i]]+' ' : letters[i]+' ';
		}
	}
	return result;
}

console.log(to_nato('If you can read'));
console.log(to_nato('hi, how are you'));
console.log(to_nato('Go for it!'));