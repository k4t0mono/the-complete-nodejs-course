// notes-node

console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

console.log(_.isString(true));
console.log(_.isString("KatoMono"));
var arr = _.uniq([1, 2, 1, 4, 5]);
console.log(arr);

//var res = notes.addNote();
//console.log(res);
//console.log('Result: ', notes.add(2,3));

//var user = os.userInfo();
//fs.appendFile("greetings.txt", `Hello ${user.username}! Im ${notes.age}\n`, function(err) {
	//if(err) {
		//console.log("Unable to write to file");
	//}
//});

