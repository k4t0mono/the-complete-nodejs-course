// util.js

var add = (a, b) => {
	return a + b;
}

var square = (a) => {
	return a*a;
}

var setName = (user, fullName) => {
	var names = fullName.split(' ');
	
	user.firstName = names[0];
	user.lastName = names.pop();

	return user;
}

module.exports = {
	add,
	square,
	setName
}
