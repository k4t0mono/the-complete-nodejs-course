// notes-node

console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");

console.log(process.argv)
var command = process.argv[2];

console.log('Comand: ', command);
if(command === 'add') {
	console.log('Adding new note');
} else if(command === 'list') {
	console.log('Listing all notes');
} else if(command === 'read') {
	conolse.log('Reading note');
} else if(command === 'remove') {
	console.log('Removing nore');
} else {
	console.log('Command unknow');
}
