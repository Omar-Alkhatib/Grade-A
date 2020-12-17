import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');

const Course = ({ match: { params: { id }, }, }) => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/students/details/${id}`, {
				headers: { authorization: token },
			})
			.then((res) => {
				setCourse(...res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);
	return (
		<div className='course'>
			<div>
				<img src={`${course.img_url}`} alt={`${course.name}`} />
			</div>
			<div className='course-details'>
				<h2> {' '} <span>Course Name : </span> {course.name}{' '} </h2>
				<h3> {' '} <span>Course Description : </span> {course.description} </h3>
				<h3> {' '} <span>Price: </span> {course.price + ' $'}{' '} </h3>
			</div>
		</div>
	);
};

export default Course;
