// notes-node

const fs = require('fs');

console.log("Starting notes.js");

var fetchNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('notes-data.json'));
	} catch(e) {
		return []
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', (JSON.stringify(notes) + "\n"));
}

var addNote = (title, body) => {
	var notes = fetchNotes();

	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => { return note.title === title });
	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);		
		return note;
	}
};

var getAll = () => {
	console.log('Getting all notes:');
};

var getNote = (title) => {
	var note = fetchNotes().filter((note) => { return note.title === title});
	return note[0];
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var notesFiltered = notes.filter((note) => { return note.title !== title });
	saveNotes(notes);
	
	return notes.length !== notesFiltered.length;
};

var logNote = (note) => {
	console.log('-----');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};
