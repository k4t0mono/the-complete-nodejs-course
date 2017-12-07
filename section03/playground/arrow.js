var square = (x) => x*x; 
console.log(square(3));

var user = {
	name: 'KatoMono',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi. Mi estar ${this.name}`);
	},

	sayHiAlt: function() {
		console.log(arguments);
		console.log(`Hi. Mi estar ${this.name}`);
	}
}

user.sayHi();
user.sayHiAlt(1,2,3,4);
