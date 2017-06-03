//https://www.codewars.com/kata/help-the-general-decode-secret-enemy-messages/train/javascript
function encode(str) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? '.split(''),
		symbols = '!@#$%^&*()_+-'.split('');
		
	const calcPos = (letter, strPos) => (((alphabet.indexOf(letter) + 1) * (2**(strPos + 1))) % 67) - 1;

	return str.split('').map((el, i) => (symbols.indexOf(el) == -1) ? alphabet[calcPos(el, i)] : el)
	.join('');
}

function expmod( base, exp, mod ){
  if (exp == 0) return 1;
  if (exp % 2 == 0){
    return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
  }
  else {
    return (base * expmod( base, (exp - 1), mod)) % mod;
  }
}

function decode(str) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? '.split(''),
		symbols = '!@#$%^&*()_+-'.split('');
	
	const calcPos = (letter, strPos) => {
		for (var i = 1; ; i++) {
			var sub = (i * expmod(2, strPos + 1, 67) % 67);
			if ((alphabet.indexOf(letter) + 1) == sub) break;
		}
		return i - 1;
	};
	
	return str.split('').map((el, i) => (symbols.indexOf(el) == -1) ? alphabet[calcPos(el, i)] : el)
	.join('');	
}

/*
var chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.0123456789? '

function build_alphabets_table () {
    return chrs.split('').map(function(c) {
        return device.encode(new Array(67).join(c));
    });
}

device.decode = function (w) {
  var tbl = build_alphabets_table();
  return w.replace(/./g, function(c, i) {
     return chrs[tbl.map(function(a) { return a[i%66]; }).indexOf(c)] || c;
  });
  */
}
