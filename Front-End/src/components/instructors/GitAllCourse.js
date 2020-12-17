import React from "react";

export default function CourseItem(props) {
  return (
    <div className="courseItemStyle">
      <img src={props.course.image} alt="Avatar" style={{ width: "100%" }} />
      <div className="secondDevStyle">
        <h4>
          <b>{props.course.name}</b>
        </h4>
        <p>{props.course.decription}</p>
      </div>
    </div>
  );
}
