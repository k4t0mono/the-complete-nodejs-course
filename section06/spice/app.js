// app.js

const db = require('./db.js');

/**
 *	Check if email already exists.
 *	Save the user to the email.
 *	Send welcome email.
 */
var handleSignup = (email, password) => {
	db.saveUser({ email, password });
}


module.exports = {
	handleSignup
}
