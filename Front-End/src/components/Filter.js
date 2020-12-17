import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiFilter3Line } from 'react-icons/ri';
const token = localStorage.getItem('token');

const history = useHistory();
const [allCourses, setAllCourses] = useState([]);
const [categories, setCategories] = useState([]);
const [enrollmentCourses, setEnrollmentCourses] = useState([]);
const [allInstructors, setAllInstructors] = useState([]);
const [toggle, setToggle] = useState(true);

useEffect(() => {
	getAllCourses();
	getAllCategories();
	getEnrollmentCourses();
	getAllInstructors();
}, []);

const getAllCourses = () => {
	axios
		.get(`http://localhost:5000/students/allCourses`, {
			headers: { authorization: token },
		})
		.then((response) => {
			setAllCourses(response.data);
		})
		.catch((err) => {
			console.log('err :', err);
		});
};

const getEnrollmentCourses = () => {
	axios
		.get(`http://localhost:5000/students/history/5`, {
			headers: { authorization: token },
		})
		.then((response) => {
			setEnrollmentCourses(response.data);
		})
		.catch((err) => {
			console.log('err :', err);
		});
};

const getAllInstructors = () => {
	axios
		.get(`http://localhost:5000/students/instructors/2`, {
			headers: { authorization: token },
		})
		.then((response) => {
			console.log('re :', response.data);
			setAllInstructors(response.data);
		})
		.catch((err) => {
			console.log('err :', err);
		});
};

const getAllCategories = () => {
	axios
		.get(`http://localhost:5000/students/categories`, {
			headers: { authorization: token },
		})
		.then((response) => {
			setCategories(response.data);
		})
		.catch((err) => {
			console.log('err :', err);
		});
};

const countResults = allCourses.reduce((acc) => acc + 1, 0);
const coursesSide = (
	<div
		className='coursesSide'
		style={!toggle ? { visibility: 'hidden' } : { visibility: 'visible' }}>
		<div className='dropdown'>
			<div className='drop-button'>My Courses</div>
			<div>
				{enrollmentCourses.map((e, i) => {
					return (
						<div>
							<Link to={`/students/categories/${e.id}`} key={i}>
								{e.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
		<div className='dropdown'>
			<div className='drop-button'>Instructors</div>
			<div>
				{allInstructors.map((e, i) => {
					return (
						<div>
							<Link
								to={`/students/coursesInstructor/${e.instructor_id}`}
								key={i}>
								{e.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
		<div className='dropdown'>
			<div className='drop-button'>Categories</div>
			<div>
				{categories.map((e, i) => {
					return (
						<div>
							<Link to={`/students/categories/${e.id}`} key={i}>
								{e.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	</div>
);

const coursesCards = (
	<div className='coursesCards'>
		<h1 className='tt'>
			Courses
			<div className='countResults'>{countResults} results</div>
		</h1>
		{allCourses.map((e, i) => (
			<Link to={`/students/courses/${e.courseId}`} key={i}>
				<div className='oneCourse'>
					<div className='imgCourse'>
						<img
							className='imgCourse'
							src={`${e.img_course}`}
							alt={`${e.course}`}
						/>
					</div>
					<div className='oneCourse2'>
						<div> {e.course} </div>
						<div> {e.description} </div>
						<div> {e.category} </div>
						<div> {e.instructor} </div>
						<div> {e.rating} </div>
					</div>
					<div className='oneCourse3'>
						<div> $ {e.price} </div>
						<div> more details... </div>
					</div>
				</div>
			</Link>
		))}
	</div>
);
export default {
	coursesCards,
	coursesSide,
};
