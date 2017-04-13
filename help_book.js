function stockList(listOfArt, listOfCat) {
	var dictOfArt = {};
	for (var i = 0; i < listOfArt.length; i++) {
		[word, amount] = listOfArt[i].split(' ');
		dictOfArt[word] = +amount;
	}
	var dictOfCat = {};
	for (i = 0; i < listOfCat.length; i++) {
		dictOfCat[listOfCat[i]] = 0;
	}
	for (var key in dictOfArt) {
		if (listOfCat.indexOf(key[0]) > -1) {
			dictOfCat[key[0]] += dictOfArt[key];
		}
	}
	var result_str = [];
	for (key in dictOfCat) {
		result_str.push('('+key+' : '+dictOfCat[key]+')');
	}
	return ((listOfArt.length == 0) || (listOfCat.length == 0)) ? '' : result_str.join(' - ');
}

console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "W"]));

// function stockList(listOfArt, listOfCat) {
//   res = {};
//   listOfCat.forEach(function(cat) {
//     res[cat] = 0;
//   });
  
//   listOfArt.forEach(function(art) {
//     var cat = art[0];
//     var count = parseInt(art.split(' ')[1]);
//     res[cat] += count;
//   });
  
//   return res
// }