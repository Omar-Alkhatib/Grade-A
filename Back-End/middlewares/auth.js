const jwt = require('jsonwebtoken');

//checking if login or not
const authentication = async (req, res, next) => {
	const token = await req.headers.authorization;

	if (!token) {
		res.status(401).json('Please login first');
	}
	jwt.verify(token, process.env.SECRET, (err, result) => {
		if (err) throw err;
		next();
	});
};

//Admin permission middleware
const adminPermission = (req, res, next) => {
	const token = req.headers.authorization;
	jwt.verify(token, process.env.SECRET, (err, result) => {
		if (err) throw err;
		if (result.role_id === 1) {
			next();
		} else {
			res.json("You don't have the permission");
		}
	});
};

//instructor  permission middleware
const instructorPermission = (req, res, next) => {
	const token = req.headers.authorization;
	jwt.verify(token, process.env.SECRET, (err, result) => {
		if (err) throw err;
		if (result.role_id === 2) {
			next();
		} else {
			res.json("You don't have the permission");
		}
	});
};

//student permission
const studentPermission = (req, res, next) => {
	// console.log('STUDENT:', req.headers.authorization);
	const token = req.headers.authorization;
	jwt.verify(token, process.env.SECRET, (err, result) => {
		if (err) throw err;
		if (result.role_id === 3) {
			next();
		} else {
			res.json("You don't have the permission");
		}
	});
};

module.exports = {
	authentication,
	adminPermission,
	instructorPermission,
	studentPermission,
};
