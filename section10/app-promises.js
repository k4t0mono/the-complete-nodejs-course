// With promises

const users = [
	{
		id: 1,
		name: 'KatoMono',
		school_id: 101
	},
	{
		id: 2,
		name: 'Brenex',
		school_id: 123
	}
];

const grades = [
	{
		id: 1,
		school_id: 101,
		grade: 77
	},
	{
		id: 2,
		school_id: 123,
		grade: 99
	},
	{
		id: 1,
		school_id: 101,
		grade: 44
	},
	{
		id: 77,
		school_id: 101,
		grade: 100
	}
];

const get_user = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if(!user)
			reject(`Eror: No user with id #${id}`);
		else
			resolve(user);
	});
};

const get_grades = (school_id) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter((grade) => grade.school_id == school_id));
	});
};

const get_status = (user_id) => {
	let user;

	return get_user(user_id).then((u) => {
		user = u;

		return get_grades(user.school_id);
	}).then((grades) => {
		let avg = 0;

		if(grades.length) {
			avg = grades.map((g) => g.grade).reduce((a, b) => a + b);
			avg /= grades.length;
		}

		return `${user.name} has a grade of ${avg}%.`
	});
};

const get_status_alt = async (user_id) => {
	const user = await get_user(user_id);
	const grades = await get_grades(user.school_id);

	let avg = 0;
	if(grades.length) 
		avg = grades.map((g) => g.grade).reduce((a, b) => a + b) / grades.length;

	return `${user.name} has a grade of ${avg}%.`
};

get_status_alt(1).then((r) => {
	console.log(r);
}).catch((e) => console.log(e));
