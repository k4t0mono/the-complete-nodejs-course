//var obj = {
	//name: 'KatoMono Enkeli'
//}

//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name":"KatoMono", "age":42, "tags": ["aa", "bb"]}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
	title: "Secretes Notes",
	body: "SSdtIGdhYWFhYWFhYWF5eXl5eXl5eXl5IQ=="
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var notesString = fs.readFileSync('notes.json');
var notes = JSON.parse(notesString);
console.log(notes);
