import React, { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TopCategories from './components/TopCategories';
import Course from './components/Course';
import CategoryCourses from './components/CategoryCourses';
import AllCourses from './components/AllCourses';
import Login from './components/Login';
import Signup from './components/Signup';
import Result from './components/Result';
import Functions from './components/Functions';
import AddCategory from './components/AddCategory';
import Disable from './components/Disable';
import PageNotFound from './components/PageNotFound';
import Instructors from './components/Instructors';
import StudentsDetails from './components/StudentsDetails';
import InstructorsDetails from './components/InstructorsDetails';
import Account from './components/instructors/Account';
import InstructorCourses from './components/instructors/InstructorCourses';
import Lesson from './components/instructors/Lesson';
import jwt_decode from 'jwt-decode';
import Welcom from './components/Welcom';
import Courses from './components/Courses';
import CoursesByInstructor from './components/CoursesByInstructor';
let token = localStorage.getItem('token');
console.log(jwt_decode(token));

const App = () => {
	const [key, setKey] = useState('');
	const [result, setResult] = useState([]);
	if (!token) {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						{' '}
						<Redirect to='/login' />{' '}
					</Route>
					<Route exact path='/login' render={(props) => <Login {...props} />} />
					<Route
						exact
						path='/signup'
						render={(props) => <Signup {...props} />}
					/>
				</Switch>
			</Router>
		);
	} else {
		const decoded = jwt_decode(token);
		const role_id = decoded.role_id;
		if (role_id === 1) {
			return (
				<Router>
					<Route exact path='/'>
						{' '}
						<Redirect to='/login' />{' '}
					</Route>
					<Switch>
						<Route
							exact
							path='/login'
							render={(props) => <Login {...props} />}
						/>
						<Route
							exact
							path='/signup'
							render={(props) => <Signup {...props} />}
						/>
						<Route
							exact
							path='/admin'
							render={(props) => <Functions {...props} />}
						/>
						<Route
							exact
							path='/admin/addCategory'
							render={(props) => <AddCategory {...props} />}
						/>
						<Route
							path='/admin/disable'
							render={(props) => <Disable {...props} />}
						/>
						<Route
							path='/admin/students_details'
							render={(props) => <StudentsDetails {...props} />}
						/>
						<Route
							path='/admin/instructors_details'
							render={(props) => <InstructorsDetails {...props} />}
						/>
					</Switch>
				</Router>
			);
		} else if (role_id === 2) {
			return (
				<Router>
					<Route exact path='/'>
						{' '}
						<Redirect to='/login' />{' '}
					</Route>
					<Switch>
						<Route
							exact
							path='/login'
							render={(props) => <Login {...props} />}
						/>
						<Route
							exact
							path='/signup'
							render={(props) => <Signup {...props} />}
						/>
						<Route
							path='/instructors'
							render={(props) => <Instructors {...props} />}
						/>
					</Switch>
				</Router>
			);
		} else if (role_id === 3) {
			return (
				<Router>
					<Route exact path='/'>
						{' '}
						<Redirect to='/login' />{' '}
					</Route>
					<Route
						path='/students'
						render={(props) => (
							<Navbar {...props} setKey={setKey} setResult={setResult} />
						)}
					/>
					<Switch>
						<Route
							exact
							path='/login'
							render={(props) => <Login {...props} />}
						/>
						<Route
							exact
							path='/signup'
							render={(props) => <Signup {...props} />}
						/>
						<Route
							exact
							path='/welcom'
							render={(props) => <Welcom {...props} />}
						/>
						<Route
							exact
							path='/students'
							render={(props) => <Home {...props} />}
						/>
						<Route
							exact
							path='/students/result'
							render={(props) => (
								<Result {...props} result={result} input={key} />
							)}
						/>
						<Route
							exact
							path='/students/courses/:id'
							render={(props) => <Course {...props} />}
						/>
						<Route
							exact
							path='/students/categories'
							render={(props) => <TopCategories {...props} />}
						/>
						<Route
							exact
							path='/students/categories/:id'
							render={(props) => <CategoryCourses {...props} />}
						/>
						<Route
							exact
							path='/students/courses'
							render={(props) => <AllCourses {...props} />}
						/>
						<Route
							exact
							path='/students/coursesFilter'
							render={(props) => <Courses {...props} />}
						/>
						<Route
							exact
							path='/students/coursesInstructor/:id'
							render={(props) => <CoursesByInstructor {...props} />}
						/>
						<Route render={(props) => <PageNotFound {...props} />} />
					</Switch>
				</Router>
			);
		} else {
			return <div>There's something wrong !</div>;
		}
	}
};
export default App;
