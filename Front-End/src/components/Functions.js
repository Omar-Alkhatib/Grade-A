import React from 'react'
import { useHistory } from "react-router-dom";

const Functions = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="functions">
                <button onClick={() => history.push('/admin/addCategory')}>Add Category</button>
                <button onClick={() => history.push('/admin/students_details')} >Students Details</button>
                <button onClick={() => history.push('/admin/disable')}>Disable User</button>
                <button onClick={() => history.push('/admin/instructors_details')} >Instructors Details</button>
                <button onClick={() => { history.push('/login') }} >Log out</button>
            </div>
        </div>
    )
}

export default Functions
