import { Link, useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate()
    async function logout() {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (

        <nav>
            {/* {token ? "hi, you're logged in// sign out" : "sign in button"} */}
            <div className="header-top-right">
                <button className="sign-out-button" onClick={logout}>
                    sign out
                </button>
            </div>
        </nav>
    )
}