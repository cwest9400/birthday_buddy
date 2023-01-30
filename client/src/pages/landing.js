import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <div className="landing-container">
        <h1>birthday buddy</h1>
            <div className="cta-container">
                <div className="left-side">
                    <Link to={'/dashboard'}>
                    <h2>sign in</h2>
                    </Link>
                </div>
                <div className="right-side">
                    <h2>sign up</h2>
                </div>
            </div>
            <div className="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}