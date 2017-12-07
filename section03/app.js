// notes-node

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
console.log('Yargs: ', argv);

var command = argv._[0];
if(command === 'add') {
	note = notes.addNote(argv.title, argv.body);

	if(note) {
		console.log('Note added successfully');
		console.log('-----');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('A note with this title already exsits');
	}

} else if(command === 'list') {
	notes.getAll();

} else if(command === 'read') {
	notes.getNote(argv.title);

} else if(command === 'remove') {
	var removed = notes.removeNote(argv.title);
	var message = removed ? 'Note removed' : 'Note not found';
	console.log(message);

} else {
	console.log('Command unknow');
}
