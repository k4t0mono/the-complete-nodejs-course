// F(USD, BRL, 20) = 75.05

//http://data.fixer.io/api/latest?access_key=22a451464e94823e7f1f238235c5fed1&format=1

const axios = require('axios');

const FIXER_KEY = process.env['FIXER_KEY']
const BASE_URL = 'http://data.fixer.io/api/latest'


const get_extenge_rate = async (from, to) => {
	const url = `${BASE_URL}?access_key=${FIXER_KEY}&format=1`;
	const response = await  axios.get(url);

	const euro = 1 / response.data.rates[from];
	const rate = euro * response.data.rates[to];

	return rate;
};

const get_countries = async (currency) => {
	const url = `https://restcountries.eu/rest/v2/currency/${currency}`;
	const response = await axios.get(url);

	return response.data.map((c) => c.name);
};


get_extenge_rate('BRL', 'ARS')
	.then((r) => console.log(r))
	.catch((e) => console.log(e));

get_countries('BOB')
	.then((r) => console.log(r))
	.catch((e) => console.log(e));
