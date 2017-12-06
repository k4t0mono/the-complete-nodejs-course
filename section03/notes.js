// notes-node

const fs = require('fs');

console.log("Starting notes.js");

var addNote = (title, body) => {
	var notes = [];

	try {
		notes = JSON.parse(fs.readFileSync('notes-data.json'));
	} catch(e) {
		//fs.writeFileSync('notes-data.json', '');
	}

	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => { return note.title === title });
	if(duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', (JSON.stringify(notes) + "\n"));
	}

};

var getAll = () => {
	console.log('Getting all notes:');
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote = (title) => {
	console.log('Removing note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
