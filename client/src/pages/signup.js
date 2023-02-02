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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={event => handleLogin(event)}>

                <p>firstName</p>
                <input required type="text" autoComplete='false'/>
                <p>lastName</p>
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

// export default function SignUp() {
    

//     return (
//         <div>
//             <h1>sign up form</h1>
//             <form>
//                 <p>First Name</p>
//                 <input/>
//                 <p>Last Name</p>
//                 <input/>
//                 <p>Email</p>
//                 <input/>
//                 <p>Password</p>
//                 <input/>
                
//                 <input type="submit" value="sign up"/>
//             </form>
//         </div>
//     )
// }