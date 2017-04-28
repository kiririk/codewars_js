//https://www.codewars.com/kata/molecule-to-atoms/train/javascript
function parseMolecule(formula) {
	function compose() {
		var args = Array.prototype.slice.call(arguments),
				val = args[0],
				funcs = args.slice(1);
		funcs.forEach(f => val = f(val));
		return val;
	}
	
	function toAtoms(str) {
		let result = {};
		str.match(/([A-Z][a-z]*)/g).forEach(el => result[el] = 0);
		return result;
	}

	const toRoundBr = str => str.replace(/[\{\[]/g,'(').replace(/[\}\]]/g,')'),
		  expandSimpleMolecules = str => str.replace(/([A-Z][a-z]*\d*)/g, str => str.match(/\D+/g)[0]
											.repeat(str.match(/\d+/g) == null ? 1 : +str.match(/\d+/g)[0])); 
	let atoms = toAtoms(formula),
		sub_result = compose(formula, toRoundBr, expandSimpleMolecules);
	
	function expandComlexMolecules(str) {
		let level = 0, inside = '', outside = '', multiplier = 1;
		for (let i = 0, len = str.length; i < len; i++) {
			if (level == 0) {
				if (str[i] == '(') level+=1;
				else outside += str[i];
			} else {
				if (str[i] == '(') {
					level+=1;
					inside += str[i];
				}
				else if (str[i] == ')') {
					level-=1;
					if (level > 0) inside += str[i];
					if (level == 0) {
						outside += '#'; i++;
						let str_num = '';
						while (true) {
							if (isNaN(parseInt(str[i]))) break;
							else { 
								str_num += str[i];
								i++;
							}
						}
						multiplier = +str_num == 0 ? 1 : +str_num;
						outside += str.slice(i,len);
						break;
					}
				} else inside += str[i];
			}
		}
		return outside.replace(/\#/, inside.repeat(multiplier))
	}
	
	
	while (true) {
		let pre = sub_result,
			next = expandComlexMolecules(sub_result);
		if (pre == next) break;
		else sub_result = next;
	}
	
	sub_result.match(/([A-Z][a-z]*)/g).forEach(el => atoms[el]+=1);
	return atoms;
}
