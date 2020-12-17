/* eslint-disable */
import React from 'react';
import LessonItem from './LessonItem';

export default function GitAllLessons({ lessons }) {
	return lessons.map((lesson) => {
		return (
			<div className='lessonItemStyle'>
				<LessonItem lesson={lesson} Key={lesson.id}></LessonItem>
			</div>
		);
	});
}
