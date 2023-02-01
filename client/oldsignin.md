import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function SignIn() {
    const navigate = useNavigate()
    
    function handleSignIn(e) {
        e.preventDefault()
        
        const form = e.target
        const user = {
            // refactor
            email: form[0].value,
            password: form[1].value
        }
        //refactor
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", data.token)
            })
        }


        useEffect(() => {
            fetch("/isUserAuth", {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            })
                .then(res => res.json())
                .then(data => data.isLoggedIn ? navigate("/dashboard") : null)
        }, [])
    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={event => handleSignIn(event)}>

                <p>Email</p>
                <input required type="email" />
                <p>Password</p>
                <input required type="password" />

                <input type="submit" value="sign in" />
            </form>
        </div>
    )
}