import React from 'react';
import alaa from './pics/alaa.png';
import omar from './pics/omar.png';
import fadi from './pics/fadi.png';
import shehadeh from './pics/shehadeh.png';
import { useHistory } from "react-router-dom";
import { FaRegSmileBeam, FaRegHandScissors } from "react-icons/fa";

const Welcom = () => {
	const history = useHistory();
	return (
		<div className='welcomePage'>
			<div className='team'>
			<h1> <FaRegSmileBeam /> Welcom to our project <FaRegHandScissors /></h1>
			<div className='welcome'>
				<button className='wel' onClick={() => history.push('/admin')}>Admin Page</button>
				<button className='wel' onClick={() => history.push('/students')}>Home Page</button>
				<button className='wel' onClick={() => history.push('/login')}>Login</button>
				<button className='wel' onClick={() => history.push('/instructors/account')}>Instuctor</button>
			</div>
			<h1>Our Team Members</h1>
			<div className='members'>
				<div className='member'>
					<img src={omar} alt='omar pic'></img>
					<h3>Omar Khateeb</h3>
				</div>
				<div className='member'>
					<img src={fadi} alt='fadi pic'></img>
					<h3>Fadi Fuqaha</h3>
				</div>
				<div className='member'>
					<img src={shehadeh} alt='shehadeh pic'></img>
					<h3>Shehadeh Momani</h3>
				</div>
				<div className='member'>
					<img src={alaa} alt='alaa pic'></img>
					<h3>Alaa Khalila</h3>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Welcom
