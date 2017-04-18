function validate(password) {
	if (password.length < 6) return false;
	else if (password.match(/[0-9]/) === null) return false;
	else if (password.match(/[a-z]/) === null) return false;
	else if (password.match(/[A-Z]/) === null) return false;
	else if (password.match(/[^a-z0-9]/ig) !== null) return false;
	else return true;
}

function validate(password) {
  return password.length >= 6 && 
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /^([a-zA-Z]|\d)*$/.test(password);
}
