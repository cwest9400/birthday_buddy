import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function UdpateBirthday(props) {
    // const id = props._id
    const [birthday, setBirthday] = useState([])
    const [editBirthday, setEditBirthday] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
    })
    const { id } = useParams()
    const URL = `http://127.0.0.1:4000/birthdays/${id}`
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
                        <p>First Name</p>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="*First Name"
                            value={birthday.firstName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        <p>Last Name</p>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={birthday.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                        <label htmlFor="birthday">
                            <p>BirthdayCard</p>
                            <input
                                required={true}
                                type="date"
                                id="birthday"
                                name="birthday"
                                placeholder="MM/DD"
                                value={birthday.birthday}
                                onChange={handleChange}
                                />
                                <p>*just pick the month and date, the year doesn't matter.</p>
                        </label>
                        <input type="submit" value="update" />
                    </div>
            </form>



        </div>
    )
}

