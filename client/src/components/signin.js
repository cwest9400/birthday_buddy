
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export default function SignIn() {
    const navigate = useNavigate()
  
    
    
    function handleLogin(e) {
        e.preventDefault()
        
        const form = e.target
        const user = {
            // refactor
            email: form[0].value,
            password: form[1].value
        }
        //local testing use: "http://127.0.0.1:4000/login"
        fetch("https://birthdaybuddy.herokuapp.com/login", {
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
        <div>
            <h1>Sign in</h1>
            <form onSubmit={event => handleLogin(event)}>

                <p>Email</p>
                <input required type="email" autoComplete='false'/>
                <p>Password</p>
                <input required type="password"  autoComplete='false'/>

                <input type="submit" value="sign in" />
            </form>
        </div>
    )
}

