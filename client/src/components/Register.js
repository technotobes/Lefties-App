import React, { useState } from 'react'

function Register() {

    const [user, setUser] = useState({})

    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveUser = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user) 
        }).then(response => response.json())
        .then(result => {
            console.log(result)

        })
    }

    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="email" name="email" onChange={handleTextChange}/>
            <input type="text" placeholder="username" name="username" onChange={handleTextChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleTextChange}/>
            <button onClick={handleSaveUser}>Register</button>
        </div>
    )
}

export default Register