import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './pics/logo.png';
import search from './pics/search.png';
const token = localStorage.getItem('token');

const Navbar = (props) => {
	const [categories, setCategories] = useState([]);

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

	const resultSearched = (i) => {
		axios
			.get(`http://localhost:5000/students/search/${i}`, {
				headers: { authorization: token },
			})
			.then((res) => {
				props.setKey(i);
				props.setResult(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};

	useEffect(() => {
		getAllCategories();
	}, []);

	return (
		<div>
			<nav className='navbar'>
				<Link to='/students'>
					<img src={logo} className='logo' alt=''></img>
				</Link>
				<div className='dropdown'>
					<div className='drop-button'>Classifications</div>
					<div className='dropdown-content'>
						{<Link to={`/students/courses/`}> All Courses </Link>}
						{<Link to={`/students/categories/`}> All Categories </Link>}
						{categories.map((e, i) => {
							return (
								<Link to={`/students/categories/${e.id}`} key={i}>
									{e.name}
								</Link>
							);
						})}
					</div>
				</div>
				<div className='search'>
					<img src={search} alt=''></img>
					<Link to={`/students/result`}>
						<input
							placeholder='Search for anything'
							onKeyPress={(e) => {
								if (e.key === 'Enter') resultSearched(e.target.value);
							}}></input>
					</Link>
				</div>
				<h4>
					<Link to='/join/instructor-signup'>Teach On Grade-A</Link>
				</h4>
				<button className='log'>
					<Link to='/login'>Log in</Link>
				</button>
				<button className='sign'>
					<Link to='/signup'>Sign up</Link>
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
