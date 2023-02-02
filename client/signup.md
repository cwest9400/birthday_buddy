// import { useState, useEffect } from 'react'
import { useNavigate } from "react-router"

function Register() {
    const navigate = useNavigate()

    async function handleRegister(e) {
        e.preventDefault()

        const form = e.target
        const user = {
            // refactor
            email: form[0].value,
            password: form[1].value
        }
        //refactor
        fetch("http://127.0.0.1:4000/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            
    }
    // useEffect(() => {
        //     fetch("http://127.0.0.1:4000/isUserAuth", {
        //         headers: {
        //             "x-access-token": localStorage.getItem("token")
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => data.isLoggedIn ? navigate("/dashboard") : null)
                
        // }, [])   
    
        return (
            <div>
               <h1>Sign Up</h1>
                <form onSubmit={event => handleRegister(event)}>
        
        
                    <p>First Name</p>
                    <input required type="text" autoComplete='false'/>
                    <p>Last Name</p>
                    <input type="text" autoComplete='false'/>
                    <p>Email</p>
                    <input required type="email" autoComplete='false'/>
                    <p>Password</p>
                    <input required type="password"  autoComplete='false'/>
        
                    <input type="submit" value="sign in" />
                </form>
            </div>
        )
}


export default function Register