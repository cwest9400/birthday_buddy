import { Link, Navigate } from "react-router-dom"

export default function Header() {
    //if logged in return 'logout' nav instead
    //if not logged in, return 'sign in' nav

    //this makes a loop
    // async function logout() {
    //     localStorage.removeItem("token")
    //     Navigate("/")
    // }
    
    return (
        <nav>
            <div>about</div>
            <div>sign in</div>
            /
            <div>
                {/* <button onClick={logout()}>
                    sign out
                </button> */}
            </div>
            <Link to={'/register'}>
                <div>sign up</div>
            </Link>

        </nav>
    )
}