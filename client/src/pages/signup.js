// import { useState, useEffect } from 'react'



import { useNavigate } from 'react-router-dom'




export default function SignUp() {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        const form = e.target
        const user = {
            // refactor
            firstName: form[0].value,
            lastName: form[1].value,
            email: form[2].value,
            password: form[3].value
        }
        //refactor
        //local testing use: "http://127.0.0.1:4000/register"
        fetch("https://birthdaybuddy.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("token", data.token)
                navigate("/dashboard")
            })
    }

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={event => handleLogin(event)}>

                <p>
                    First name
                    <br></br>
                    <input required type="text" autoComplete='false' />
                </p>
                Last name
                <br></br>
                <input type="text" autoComplete='false' />
                <p>
                    Email
                    <br></br>
                    <input required type="email" autoComplete='false' />
                </p>
                Password
                <br></br>
                <input required type="password" autoComplete='false' />
                <p>
                    <input className="green-button" type="submit" value="sign up" />
                </p>
            </form>
        </div>
    )
}