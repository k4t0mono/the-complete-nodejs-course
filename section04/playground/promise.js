// promise.js

var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number') {
				resolve(a+b);

			} else {
				reject('Both need to be a number');
			} 
		}, 1500);
	});
}

asyncAdd(1, 4).then((msg) => {
	console.log('Result: ', msg);
	return asyncAdd(msg, 42.24);
	}

).then((msg) => { 
		console.log('Result: ', msg)
	}
).catch((err) => {
	console.log('Error: ', err)
});

var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		//resolve('Hey, It worked.');
		reject('Unable to fulfill promise');
	}, 2500);
});

somePromise.then(
	(msg) => console.log('Sucess: ', msg),
	(err) => console.log('Error: ', err)
);
