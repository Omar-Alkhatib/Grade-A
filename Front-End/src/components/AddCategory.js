import React, { useState } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');

const AddCategory = () => {
	const [name, setname] = useState('');

	const nameHandler = (e) => {
		setname(e.target.value);
	};

	const addCat = () => {
		axios.post(
			'http://localhost:5000/admin/category',
			{
				headers: { authorization: token },
			},
			{ name }
		);
		alert('Category Added');
	};

	return (
		<div className='AddCat'>
			<h2>Add Category</h2>
			<input placeholder='Category Name' onChange={nameHandler}></input>
			<button onClick={addCat}>Add</button>
		</div>
	);
};

export default AddCategory;
