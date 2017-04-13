//Compose functions (T Combinator)
var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

var compose = function() {
	var args = Array.prototype.slice.call(arguments),
			val = args[0],
			funcs = args.slice(1);
	funcs.forEach(f => val = f(val));
	return val;
}

console.log(compose(5, doubleTheValue));
console.log(compose(5, doubleTheValue, addOneToTheValue));

//const compose = (x, ...fs) => fs.reduce((a, f) => f(a), x);

// function compose(val) {
//   [].slice.call(arguments, 1).forEach(function(fn) {val = fn(val);});
//   return val;
// }

// function compose() { 
//   const args = Array.from(arguments);
//   if (args.length === 0) {
//     return undefined;
//   }
//   return args.reduce((acc, curr) => curr(acc));
// }
