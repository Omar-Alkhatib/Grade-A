import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const token = localStorage.getItem('token');

const InstructorsDetails = () => {
	const history = useHistory();
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getInstructorsDetails();
	}, []);
	const getInstructorsDetails = () => {
		axios
			.get('http://localhost:5000/admin/instructors_details', {
				headers: { authorization: token },
			})
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};
	return (
		<div>
			<h1 className='names-ad'>All Instructors</h1>
			{users.map((e, i) => (
				<div key={i} className='std-details'>
					<div>
						{' '}
						<span>Name: </span> {e.name} | <span>Email: </span> {e.email} |{' '}
						<span>Phone: </span> {e.phone} | <span>Banned: </span>{' '}
						{e.isDisabled}
					</div>
				</div>
			))}
			<button className='log' onClick={() => history.push('/admin')}>
				{' '}
				Home{' '}
			</button>
		</div>
	);
};

export default InstructorsDetails;
