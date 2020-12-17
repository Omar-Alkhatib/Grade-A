import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const token = localStorage.getItem('token');

const TopCategories = () => {
	const [categories, setCategories] = useState([]);
	// useEffect(() => {
	// 	getTopCategory();
	// }, []);
	const getTopCategory = () => {
		axios
			.get('http://localhost:5000/students/categories', {
				headers: { authorization: token },
			})
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};
	useEffect(() => {
		getTopCategory();
	}, []);
	return (
		<div className='cards'>
			<h1 className='tt'>Top categories</h1>
			<div className='all-cards'>
				{categories.map((e, i) => (
					<Link to={`/students/categories/${e.id}`} key={i}>
						<div className='card'>
							<img src={`${e.img_url}`} alt={`${e.name}`} />
							<h2>{e.name}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TopCategories;
