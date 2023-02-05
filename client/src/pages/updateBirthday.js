import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import moment from "moment"

export default function UdpateBirthday(props) {
    // const id = props._id
    const [birthday, setBirthday] = useState([])
    const [editBirthday, setEditBirthday] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
    })
    const { id } = useParams()
    
    //local testing use: `http://127.0.0.1:4000/birthdays/${id}`
    
    const URL = `https://birthdaybuddy.herokuapp.com/birthdays/${id}`
    
    const navigate = useNavigate()

    const getBirthday = async () => {
        try {
            const response = await fetch(URL)
            const foundBirthday = await response.json()
            setBirthday(foundBirthday)
            setEditBirthday(foundBirthday)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const userInput = { ...editBirthday }
        userInput[e.target.name] = e.target.value
        setEditBirthday(userInput)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentState = { ...editBirthday }
        try {
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentState)
            }
            const response = await fetch(URL, requestOptions)
            const updatedBirthday = await response.json()
            console.log(updatedBirthday)
            // update local state with response (json from be)
            navigate(`/dashboard/birthdaybook`)
        } catch (err) {
            console.log(err)
        }
    }
    
    const deleteBirthday = async (e) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(URL, options)
            const deletedBirthday = await response.json()
            console.log(deletedBirthday)
            navigate(`/dashboard/birthdaybook`)
            
        }catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getBirthday()
        
    }, [])

    return (
        <div>
            <Link to={`/dashboard/birthdaybook/`}>
                <button className="green-button">birthday book</button></Link>
            <h2>update birthday</h2>
       <div className="update-birthday-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="*First Name"
                            value={editBirthday.firstName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        <p>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={editBirthday.lastName}
                            onChange={handleChange}
                        />
                        </p>
                    </label>
                </div>
                <div>
                        <label htmlFor="birthday">
                            <p><input
                                required={true}
                                type="date"
                                id="birthday"
                                name="birthday"
                                placeholder="MM/DD"
                                value={moment.utc(editBirthday.birthday).format('yyyy-MM-DD')}
                                onChange={handleChange}
                                />
                                </p>
                        </label>
                        <p className="button-center"><input className="green-button" type="submit" value="update" /></p>
                    </div>
            </form>
            </div>
<h3 className="delete-title">Delete birthday</h3>
<button className="sign-out-button" onClick={deleteBirthday}>delete</button>
        </div>
    )
}