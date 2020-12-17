import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddNewCourse from './AddNewLesson';
import GitAllLessons from './GitAllLessons';
const token = localStorage.getItem('token');
export default function Lesson() {
	const [lessons, setLessons] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/instructors/lessons', {
				headers: { authorization: token },
			})
			.then((res) => {
				setLessons(res.data);
			})
			.catch((err) => {});
	}, []);
	return (
		<Router>
			<div>
				<div>
					<ul className='unOrderListStyle'>
						<li className='listItemStyle'>
							<Link className='linkStyle' to='/lessons'>
								Get All Lessons
							</Link>
						</li>
						<li className='listItemStyle'>
							<Link className='linkStyle' to='/newLesson'>
								New Lesson
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<Route path='/lessons'>
					<div
						style={{
							border: ' 1px solid black',
							width: '100%',
							display: 'flex',
							flexWrap: 'wrap',
						}}>
						<GitAllLessons lessons={lessons}></GitAllLessons>
					</div>
				</Route>
				<Route path='/newLesson'>
					<div>
						<AddNewCourse></AddNewCourse>
					</div>
				</Route>
			</div>
		</Router>
	);
}
