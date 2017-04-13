function sortByLength (array) {
	return array.sort((el1,el2) => el1.length - el2.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));