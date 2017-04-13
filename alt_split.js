function encrypt(text, n) {
	if (text != null) {
		for (var i = 0; i < n; i++) {
			var result_left = '', result_right = '';
			text = text.split('');
			for (var j = 0; j < text.length; j++) {
				(j%2 == 1) ? result_left += text[j] : result_right += text[j];
			}
			text = result_left + result_right;
		}
	}
	return text;
}

function decrypt(encryptedText, n) {
	if (encryptedText != null) {
		var text_len = encryptedText.length,
			middle = (text_len%2 == 0) ? text_len/2 : text_len/2 - 0.5;
		for (var i = 0; i < n; i++) {
			var left = encryptedText.slice(0, middle),
				right = encryptedText.slice(middle, text_len),
				result = '';
			for (var j = 0; j < middle; j++) {
				result += right[j] + left[j];
			}
			if (text_len%2 != 0) result += right[middle];
			encryptedText = result;
		}
	}
	return encryptedText;
}

// function encrypt(text, n) {
//   for (let i = 0; i < n; i++) {
//     text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
//   }
//   return text
// }

// function decrypt(text, n) {
//   let l = text && text.length / 2 | 0
//   for (let i = 0; i < n; i++) {
//     text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//   }
//   return text
// }