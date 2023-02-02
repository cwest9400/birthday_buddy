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
    
    const URL = `https://birthdaybuddy.herokuapp.com/${id}`
    
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
            <Link to={`/dashboard/birthdaybook/`}><h3>back to birthday book</h3></Link>
            <h2>update birthday</h2>
       
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">
                        {/* <p>{birthday.firstName}</p> */}
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
                        {/* <p>{birthday.lastName}</p> */}
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={editBirthday.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                        <label htmlFor="birthday">
                            <p>{birthday.birthday}</p>
                            <input
                                required={true}
                                type="date"
                                id="birthday"
                                name="birthday"
                                placeholder="MM/DD"
                                value={moment.utc(editBirthday.birthday).format('yyyy-MM-DD')}
                                onChange={handleChange}
                                />
                                <p>*just pick the month and date, the year doesn't matter.</p>
                        </label>
                        <input type="submit" value="update" />
                    </div>
            </form>

<h2>Delete birthday</h2>
<button onClick={deleteBirthday}>delete</button>

        </div>
    )
}

