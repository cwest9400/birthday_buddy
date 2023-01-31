import { Link } from "react-router-dom"

export default function Header() {
    //if logged in return 'logout' nav instead
    //if not logged in, return 'sign in' nav
    return (
        <nav>
            <div>about</div>
            <div>sign in</div>
            /
            <Link to={'/signup'}>
                <div>sign up</div>
                </Link>
            
            </nav>
    )
}