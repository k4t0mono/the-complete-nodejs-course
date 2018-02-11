// util.js

var add = (a, b) => {
	return a + b;
}


var assyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a+b);
	}, 1234);
}


var square = (a) => {
	return a*a;
}


var assyncSquare = (a, callback) => {
	setTimeout(() => {
		callback(a*a);
	}, 1420);
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
	setName,
	assyncAdd,
	assyncSquare
}
