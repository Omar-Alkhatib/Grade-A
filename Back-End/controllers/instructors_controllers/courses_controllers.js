const db = require("../../db");

const registeredCoursesInstructor = (req, res) => {
  const query = `SELECT * FROM courses c JOIN registration r ON c.id = r.course_id AND instructor_id = ?`;
  const data = req.params.id;
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const visiblityCourse = (req, res) => {
  const query = `UPDATE courses SET isDisabled = !isDisabled WHERE  id = ?`;
  const data = req.params.id;
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const addCourse = (req, res) => {
  const { name, price, description, instructor_id, category_id } = req.body;
  const query = `INSERT INTO courses (name,price,description,instructor_id,created_at,category_id) values (?,?,?,?,?,?)`;
  const data = [
    name,
    price,
    description,
    instructor_id,
    new Date(),
    category_id,
  ];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const addLesson = (req, res) => {
  const { name, video_url, course_id, created_at } = req.body;
  const query = `INSERT INTO videos (name,vide_url,course_id,created_at) values (?,?,?,?)`;
  const data = [name, video_url, course_id, new Date()];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const updateCourse = (req, res) => {
  const query = `UPDATE courses SET price = ? WHERE id = ?`;
  const data = [req.params.i, req.params.id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  visiblityCourse,
  addCourse,
  updateCourse,
  registeredCoursesInstructor,
  addLesson
};
