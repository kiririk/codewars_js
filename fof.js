function friend(friends){
  for (var i = 0; i < friends.length; i++) {
  	if ((friends[i].length == 4)) {
  		friends.splice(i,i);
  		i--;
  	}
  }
  return friends;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));