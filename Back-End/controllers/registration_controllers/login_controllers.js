const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../../db');

const login = (req, res) => {
	const { email } = req.body;
	const query = `SELECT * FROM users WHERE email ='${email}'`;
	connection.query(query, async (err, result) => {
		if (err) throw err;
		//check if there is user with the request data
		if (result.length) {
			password = await bcrypt.compare(req.body.password, result[0].password);
			if (password) {
				const payload = {
					id: result[0].id,
					role_id: result[0].role_id,
					name: result[0].name,
					adress: result[0].adress,
					email: result[0].email,
					password: result[0].password,
					phone: result[0].phone,
				};
				const options = {
					expiresIn: process.env.TOKEN_EXPIRATION,
				};
				//putting token to login account
				token = jwt.sign(payload, process.env.SECRET, options);
				res.header('x-auth', token).json(token);
			} else {
				return res.json('Invalid Email or password..');
			}
		} else return res.json('Invalid Email or password..');
	});
};

module.exports = {
	login,
};
