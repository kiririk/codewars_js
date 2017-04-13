function listToArray(list) {
	var result = [];
	function pushElements(sublist) {
		result.push(sublist['value']);
		if (sublist['next']!=null) {
			pushElements(sublist['next']);
		}
	}
	pushElements(list);
	return result;
}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};
console.log(listToArray(list1));
console.log(listToArray(list2));
//можно было и циклом for, обращение к value -> list.value