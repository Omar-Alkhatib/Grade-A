const mainRouter = require('express').Router();
const db = require('../db');
const {
	studentPermission,
	instructorPermission,
	adminPermission,
	authentication,
} = require('../middlewares/auth');
const adminRouter = require('./admin.route');
const instructorsRouter = require('./instructors.route');
const studentsRouter = require('./students.route');
const registrationRouter = require('./registration.route');

mainRouter.use('/admin/', authentication, adminPermission, adminRouter);
mainRouter.use(
	'/instructors/',
	authentication,
	instructorPermission,
	instructorsRouter
);
mainRouter.use('/students/', authentication, studentPermission, studentsRouter);
mainRouter.use('/registration/', registrationRouter);

module.exports = mainRouter;
