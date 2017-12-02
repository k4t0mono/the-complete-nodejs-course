// notes-node

console.log("Starting notes.js");

module.exports.age = 19;

module.exports.addNote = () => {
	console.log("addNode()");
	return "new Note";
}

module.exports.add = (a, b) => {
	return a+b;
}
