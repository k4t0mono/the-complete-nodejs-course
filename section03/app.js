// notes-node

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const title = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
}
const body = {
	describe: 'The note its self',
	demand: true,
	alias: 'b'
}
const argv = yargs
	.command('add', 'Add a new note', {
		title,
		body
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', { title })
	.command('remove', 'Remove a note', { title })
	.help().argv;

var command = argv._[0];

if(command === 'add') {
	note = notes.addNote(argv.title, argv.body);

	if(note) {
		console.log('Note added successfully');
		notes.logNote(note);
	} else {
		console.log('A note with this title already exsits');
	}

} else if(command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note obj`);
	allNotes.forEach((note) => notes.logNote(note));

} else if(command === 'read') {
	var note = notes.getNote(argv.title);	
	if(note) {
		console.log('Getting note');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}

} else if(command === 'remove') {
	var removed = notes.removeNote(argv.title);
	var message = removed ? 'Note removed' : 'Note not found';
	console.log(message);

} else {
	console.log('Command unknow');
}
