import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Account from "./instructors/Account";
import InstructorCourses from "./instructors/InstructorCourses";
import Lesson from "./instructors/Lesson";
import { useHistory } from "react-router-dom";


export default function Instructors() {
  const history = useHistory();

  return (
    <Router>
      <div>
        <div className="sidenav">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/instructors/account" className="linkStyle" href="#about">
                Account
              </Link>
            </li>
            <li>
              <Link to="/instructors/mycourse" className="linkStyle" href="#clients">
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/instructors/lesson" className="linkStyle" href="#contact">
                Lesson
              </Link>
            </li>
            <li className="linkStyle" onClick={() => { history.push('/login') }} >
              <Link className="linkStyle" href="#contact"> Log out</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <Route path="/instructors/account">
            <div>
              <Account></Account>
            </div>
          </Route>
          <Route path="/instructors/Logout">
            <div>
              <p>LogOut</p>
            </div>
          </Route>
          <Route path="/instructors/mycourse">
            <div>
              <InstructorCourses></InstructorCourses>
            </div>
          </Route>
          <Route path="/instructors/lesson">
            <div>
              <Lesson></Lesson>
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}
