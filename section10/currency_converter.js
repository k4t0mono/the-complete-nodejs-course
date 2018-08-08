const axios = require('axios');

const FIXER_KEY = process.env['FIXER_KEY']

const get_extenge_rate = async (from, to) => {
	try {
		const url = `http://data.fixer.io/api/latest?access_key=${FIXER_KEY}&format=1`;
		const response = await axios.get(url);
		if(!response.data.success) {
			throw new Error(`Error on 'fixer.io': ${response.data.error.type}`);
		}

		const euro = 1 / response.data.rates[from];
		const rate = euro * response.data.rates[to];

		return rate;

	} catch(e) {
		throw new Error(`Unable to fetch data from 'fixer.io'\n${e.message}`);
	}
};

const get_countries = async (currency) => {
	try {
		const url = `https://restcountries.eu/rest/v2/currency/${currency}`;
		const response = await axios.get(url);

		return response.data.map((c) => c.name);

	} catch(e) {
		throw new Error(`Unable to fetch data from 'restcountriess.eu'\n${e.message}`);
	}
};

const convert_currency = async (from, to, amount) => {
	const rate = await get_extenge_rate(from, to);
	const converted = (amount * rate).toFixed(3);

	const countries = await get_countries(to);

	const s = `${amount.toFixed(3)} ${from} is worth ${converted} ${to}.` +
		`You can it spend on: ${countries.join(', ')}`;

	return s;
};

convert_currency('ARS', 'BRL', 500)
	.then((r) => console.log(r))
	.catch((e) => console.log(e.message));
