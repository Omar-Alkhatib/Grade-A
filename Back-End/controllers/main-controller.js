const db = require("../db");

const { getAllCourses, courseDetails, searchCourses, filterCourses, historyCourses, enrollmentCourse,getAllCoursesInstructorsCategories } = require('./students_controllers/courses_controllers');
const { getAllCategories, getCategoryCourses } = require('./students_controllers/categories_controllers');
const { evaluate, getRating } = require('./students_controllers/rating_controllers');
const { getAllInstructors, getAllCoursesByInstructor, getInstructor } = require('./students_controllers/instructors_controllers');
const { } = require('./students_controllers/integration_controllers');
const { students_details, disable_user } = require('./admin_controllers/students_controllers');
const { visiblityCourse, addCourse, updateCourse, registeredCoursesInstructor, addLesson } = require('./instructors_controllers/courses_controllers');
const { courseRating } = require('./instructors_controllers/rating_controllers');
const { instructors_details } = require('./admin_controllers/instructors_controllers');
const { addCategory } = require('./admin_controllers/categories_controllers');

module.exports = {
  getAllCourses,
  courseDetails,
  getAllCategories,
  searchCourses,
  filterCourses,
  historyCourses,
  enrollmentCourse,
  getCategoryCourses,
  evaluate,
  getRating,
  visiblityCourse,
  addCourse,
  addLesson,
  updateCourse,
  courseRating,
  addCategory,
  registeredCoursesInstructor,
  students_details,
  disable_user,
  instructors_details,
  getAllInstructors,
  getAllCoursesByInstructor,
  getInstructor,
  getAllCoursesInstructorsCategories,
};

