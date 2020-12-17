import React, { useState } from 'react'
import axios from 'axios'


const Disable = () => {
    const [name, setname] = useState('')

    const nameHandler = (e) => {
        setname(e.target.value)
    }

    const disableUser = () => {
        axios.put(`http://localhost:5000/admin/disable`, { name })
        alert('User is BANNED')
    }
    return (
        <div className="AddCat">
            <h2>Disable User</h2>
            <input placeholder="User's Name" onChange={nameHandler}></input>
            <button onClick={disableUser}>Disable</button>
        </div>
    )
}

export default Disable
