import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const token = localStorage.getItem('token');

const CategoryCourses = (props) => {
	const { match: { params: { id } } } = props
	const [category, setCategory] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/students/category_courses/${id}`, { headers: { authorization: token }, })
			.then((res) => {
				setCategory(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);
	return (
		<div className='cards'>
			<div className='all-cards'>{props.categoryName}</div>
			{
				category.map((e, i) => {
					return <div key={i}>
						<div className='card' key={i}>
							<Link to={`/students/courses/${e.id}`}>
								<img src={`${e.img_url}`} alt={`${e.name}`} />
								<h2>{e.name}</h2>
							</Link>
						</div>
					</div>
				})
			}
		</div>
	);
};

export default CategoryCourses;
