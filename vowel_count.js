function getCount(str) {
  var vowelsCount = 0;
  var vowel = 'aeiou'.split('');
  for (var letter = 0; letter < str.length; letter++) {
		if (vowel.indexOf(str[letter]) > -1) {
			vowelsCount++;
		}
	}
  
  return vowelsCount;
}

console.log(getCount("abracadabra"));