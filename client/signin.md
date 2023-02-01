export default function SignIn() {
    const navigate = useNavigate()
    const initialState = { email: "", password: "" }
    const [input, setInput] = useState(initialState)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await SignIn(input)

        if (createdUserToken) {
            navigate("/dashboard")
        } else {
            console.log("failed to create token")
        }
        setInput(initialState)
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
     
    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email: </label>
                <input
                    id="email"
                    name="email"
                    value={input.email}
                    autoComplete='off'
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    autoComplete='off'
                    value={input.password}
                    onChange={handleChange}
                />
                <input type="submit" value="sign in" />
            </form>
        </div>
    )
}