//https://www.codewars.com/kata/function-composition/train/javascript/
function compose(f,g) {
  return function (x) {
		return arguments.length > 1 ? f.call(null, g.apply(null, arguments)) : f(g(x));
  }
}
