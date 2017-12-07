// notes-node

const fs = require('fs');

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
	return fetchNotes();
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
	debugger;
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
