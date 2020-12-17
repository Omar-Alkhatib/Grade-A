import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');

export default function Account() {
  const [userName, setUserName] = useState('fadi');
  const [address, setAddress] = useState('amman');
  const [email, setEmail] = useState('f.alfuqahaaa@gmail.com');
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState('0790320149');

  const handleSubmit = (e) => {
    const body = {
      name: e.target[0].value,
      address: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[4].value,
      password: e.target[3].value,
    };
    axios
      .put(
        `http://localhost:5000/instructors/update_instructor/4`,
        {
          headers: { authorization: token },
        },
        body
      )
      .then((res) => { })
      .catch((err) => { });
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/instructors/instructor_details/4', {
        headers: { authorization: token },
      })
      .then((res) => {
        setUserName(res.data[0].name);
        setAddress(res.data[0].adress);
        setEmail(res.data[0].email);
        setPhone(res.data[0].phone);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onUserNameChange = (value) => {
    setUserName(value);
  };
  const onAddressChange = (value) => {
    setAddress(value);
  };
  const onEmailChange = (value) => {
    setEmail(value);
  };
  const onPasswordChange = (value) => {
    setPassword(value);
  };
  const onPhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          className='inputStyle'
          type='text'
          id='userName'
          name='userName'
          value={userName}
          onChange={(e) => onUserNameChange(e.target.value)}
        />
        <label>Address</label>
        <input
          className='inputStyle'
          type='text'
          id='address'
          name='address'
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
        />
        <label>Email</label>
        <input
          className='inputStyle'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <label>New Password</label>
        <input
          className='inputStyle'
          type='password'
          id='password'
          name='password'
          onChange={(e) => onPasswordChange(e.target.value)}
        />
        <label>Phone</label>
        <input
          className='inputStyle'
          type='phone'
          id='phone'
          name='phone'
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
        />
        {/* <label for=""></label>
        <input type="text" id="" name="" /> */}
        <input
          className='submitStyle'
          type='submit'
          name='Submit'
          value='update and save'
        />
      </form>
    </div>
  );
}
