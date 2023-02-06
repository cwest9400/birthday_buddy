import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        const form = e.target
        const user = {
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
                
                localStorage.setItem("token", data.token)
                navigate("/dashboard")
            })
    }

    return (
        <div className='sign-in'>
            <p className='sign-in-title'>Sign in</p>
            <form onSubmit={event => handleLogin(event)}>

                <p>Email
                    <br></br>
                    <input required type="email" autoComplete='false' />
                </p>
                Password
                <br></br>
                <input required type="password" autoComplete='false' />
                <div className='cta-container'>
                    <p>
                        <input className="green-button" type="submit" value="sign in" />
                    </p>
                   <div> No account? <Link to={'/register'}><span style={{color: "#95e1d3"}}>sign up</span></Link></div>
                </div>
            </form>
        </div>
    )
}

