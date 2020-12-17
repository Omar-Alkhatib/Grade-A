import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');

export default function AddNewCourse() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [instructorId, setInstructorId] = useState('');
	const [selectedFile, setSelectedFile] = useState('');
	const [createdAt, setCreatedAt] = useState('');
	const [categorys, setCategorys] = useState([]);
	const [isDisable, setIsDisable] = useState('No');
	useEffect(() => {
		axios
			.get('http://localhost:5000/instructors/categories', {
				headers: { authorization: token },
			})
			.then((res) => {
				setCategorys(res.data);
			})
			.catch((err) => {});
	}, []);
	const onChangeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
		const data = new FormData();
		data.append('file', selectedFile);
		axios
			.post(
				'http://localhost:5000/instructors/upload',
				{
					headers: { authorization: token },
				},
				data,
				{
					// receive two parameter endpoint url ,form data
				}
			)
			.then((res) => {
				// then print response status
			});
	};

	const handleSubmit = (e) => {
		const index = e.target[4].selectedIndex;
		const el = e.target[4].childNodes[index];
		const option = el.getAttribute('id');
		axios
			.post(
				'http://localhost:5000/instructors/course',
				{
					headers: { authorization: token },
				},
				{
					name: e.target[0].value,
					price: e.target[1].value,
					description: e.target[2].value,
					instructor_id: 2,
					category_id: option,
				}
			)
			.then((res) => {})
			.catch((err) => {});
		e.preventDefault();
	};

	useEffect(() => {}, []);
	const onNameChange = (value) => {
		setName(value);
	};
	const onPriceChange = (value) => {
		setPrice(value);
	};
	const onDescriptionChange = (value) => {
		setDescription(value);
	};
	const onInstructorIdChange = (value) => {
		setInstructorId(value);
	};

	const onCreatedAtChange = (value) => {
		setCreatedAt(value);
	};
	const onCategoryChange = (value) => {
		setCategorys(value);
		console.log(value);
		console.log(value);
	};

	const onIsDisableChange = (value) => {
		setIsDisable(value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>name</label>
				<input
					className='inputStyle'
					type='text'
					id='name'
					onChange={(e) => onNameChange(e.target.value)}
				/>
				<label>price</label>
				<input
					className='inputStyle'
					type='text'
					id='price'
					name='price'
					onChange={(e) => onPriceChange(e.target.value)}
				/>
				<label>description</label>
				<input
					className='inputStyle'
					type='text'
					id='description'
					name='description'
					onChange={(e) => onDescriptionChange(e.target.value)}
				/>
				<label>image Url </label>
				<input type='file' name='file' onChange={onChangeHandler} />
				<br></br>
				<label>Category</label>
				<select className='optionStyle'>
					{categorys.map((category) => (
						<option key={category.id} id={category.id} value={category.name}>
							{category.name}
						</option>
					))}
				</select>
				<input
					className='submitStyle'
					type='submit'
					name='Submit'
					value='save'
				/>
			</form>
		</div>
	);
}
