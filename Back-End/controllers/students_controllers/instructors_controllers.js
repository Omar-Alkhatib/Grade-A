const db = require('../../db');

const getAllInstructors = (req, res) => {
	const query = 'SELECT *,users.id instructor_id from users JOIN roles ON users.role_id=? AND roles.id=?';
	const data = [req.params.id, req.params.id];
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const getAllCoursesByInstructor = (req, res) => {
	const query = 'SELECT c.id courseId ,u.id instructorID,cat.id categoryId,c.name course,c.price,c.description,c.img_url img_course,c.created_at,u.name instructor, u.adress,u.email,u.phone,cat.name category,cat.img_url img_category,avg(ra.rating_value) rating FROM courses c JOIN users u ON u.id=c.instructor_id JOIN roles r ON u.role_id=r.id AND r.type LIKE "instructor" JOIN categories cat ON c.category_id =cat.id join rating ra ON ra.course_id=c.id group by ra.course_id Having instructorID =?';
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

const getInstructor = (req, res) => {
	const query = 'SELECT * from users WHERE id =?';
	const data = req.params.id;
	db.query(query, data, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
};

module.exports = {
	getAllInstructors,
	getAllCoursesByInstructor,
	getInstructor,
};

