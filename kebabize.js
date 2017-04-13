function kebabize(str) {
	return str.replace(/([A-Z])/g,'-$1') 
			  .replace(/[0-9]/g,'')
			  .replace(/^-/,'') //удаление тире с начала строки
			  .toLowerCase();
}

console.log(kebabize('camelsHaveThreeHumps'));
console.log(kebabize('camelsHave3Humps'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('myCamelCasedString'));

/*
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}
*/