import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = localStorage.getItem('token');
export default function AddNewCourse() {
  const [name, setName] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const onChangeHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    const data = new FormData();
    data.append('file', selectedFile);
    axios
      .post('http://localhost:5000/instructors/uploadVideo', data, {
        headers: { authorization: token },
      })
      .then((res) => { });
  };

  const handleSubmit = (e) => {
    const index = e.target[2].selectedIndex;
    const el = e.target[2].childNodes[index];
    const option = el.getAttribute('id');
    axios
      .post(
        'http://localhost:5000/instructors/lesson',
        {
          headers: { authorization: token },
        },
        {
          name: e.target[0].value,
          video_url: 'test_url',
          course_id: option,
        }
      )
      .then((res) => { })
      .catch((err) => { });
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/instructors/courses', {
        headers: { authorization: token },
      })
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => { });
  }, []);
  const onNameChange = (value) => {
    setName(value);
  };

  const onCourseIdChange = (value) => {
    setCourses(value);
  };

  const onCreatedAtChange = (value) => {
    setCreatedAt(value);
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

        <label>video Url </label>
        <input type='file' name='file' onChange={onChangeHandler} />
        <br></br>

        <label>Courses</label>
        <select className='optionStyle'>
          {' '}
          {courses.map((course) => (
            <option key={course.id} id={course.id} value={course.name}>
              {course.name}
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
