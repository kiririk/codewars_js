function digital_root(n) {
  while ((n.toString()).length > 1) {
  	var n_str = n.toString();
  	n = 0;
  	for (var i = 0; i < n_str.length; i++) {
  		n += Number(n_str[i]);
  	}
  }
  return n;
}

console.log(digital_root(493193));