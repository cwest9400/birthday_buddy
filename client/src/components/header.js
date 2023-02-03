import { Link, useNavigate } from "react-router-dom"
import birthdaybooklogo from '../images/birthdaybooklogo.png'

export default function Header() {
    //if logged in return 'logout' nav instead
    //if not logged in, return 'sign in' nav
const navigate = useNavigate()
    async function logout() {
        localStorage.removeItem("token")
        navigate("/")
    }
    
    return (
        <nav>
           
            <div>
                <button onClick={logout}>
                    sign out
                </button>
            </div>

            <div>
            <Link to={'/dashboard/birthdaybook'}>
                    <img className ="birthdaybook-icon" src={birthdaybooklogo} alt ="birthday book"/>
                </Link>
            </div>

        </nav>
    )
}