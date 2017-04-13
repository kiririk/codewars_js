function list(names){
  var result = '';
  for (var i = 0; i < names.length; i++) {
  	result += names[i]['name'] + ((i+1 == (names.length-1)) ? ' & ' : ((i == (names.length-1)) ? '' : ', '));
  }
  return result;
}
console.log(list([]));