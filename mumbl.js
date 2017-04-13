function accum(raw_text) {
	var text = "";
	for (var i = 0; i < raw_text.length; i++) {
		if (i != 0) text += '-';
		text += raw_text[i].toUpperCase();
		for (var j = 0; j < i; j++) {
			text += raw_text[i].toLowerCase();
		}
	}
	return text;
}

console.log(accum("RqaEzty"));