function persistence(num) {
	var num_str = num.toString(), counter = 0;
	while (num_str.length > 1) {
		num_str = num_str.split('').map(el => +el).reduce((el1, el2) => el1*el2).toString();
		counter++;		
	}
	return counter;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

// function persistence(num) {
//    var times = 0;
//    num = num.toString();   
//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }
//    return times;
// }

// const persistence = num => {
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }