import { Link } from "react-router-dom"
import BirthdayCard from "../components/birthdayCard"
import { useState, useEffect } from "react"
import moment from "moment"
import "../style/cssDev.css"

export default function BirthdayBook() {

    //local testing use: "http://127.0.0.1:4000/birthdays"
    const URL = "https://birthdaybuddy.herokuapp.com/birthdays"

    const [birthdays, setBirthdays] = useState([])
    const [newBirthday, setNewBirthday] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
    })

    const getBirthdays = async () => {
        try {
            const response = await fetch(URL, {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            })
            const allBirthdays = await response.json()

            setBirthdays(allBirthdays)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const userInput = { ...newBirthday }
        userInput[e.target.name] = e.target.value
        setNewBirthday(userInput)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentState = { ...newBirthday }
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem("token")
                },
                body: JSON.stringify(currentState)
            }

            const response = await fetch(URL, requestOptions)
            const newBirthdayEntry = await response.json()

            setBirthdays([...birthdays, newBirthdayEntry])
            console.log(currentState)
            setNewBirthday({
                firstName: "",
                lastName: "",
                birthday: "",
            })
        } catch (err) {
            console.log(err)
        }
    }

    //fetching all birthdays from birthday book
    useEffect(() => {
        getBirthdays()
    }, [])

    const birthdayArray = birthdays

    //sort by first name
    function compare(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    }

    birthdayArray.sort(compare)

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Birthday Book</h1>
            <h3 className="dashboard-welcome">Welcome to your birthday book</h3>
            <p className="dashboard-desc">Here you can see all of your birthday buddies, add new birthdays, update or delete birthdays.</p>
            <div className="dashboard-nav">
                <p>
                    <Link to={'/dashboard'}>
                        <button className="green-button">dashboard</button>
                    </Link>
                </p>
                <h3> add a new birthday</h3>
                <div className="add-birthday-container">
                    <form className="add-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">
                                First name<br></br>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="*First Name"
                                    value={newBirthday.firstName}
                                    onChange={handleChange}
                                    maxLength="12"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="lastName">
                                <p> Last Name<br></br>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={newBirthday.lastName}
                                        onChange={handleChange}
                                        maxLength="12"
                                    />
                                </p>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="birthday">
                                Birthday<br></br>
                                <input
                                    required={true}
                                    type="date"
                                    id="birthday"
                                    name="birthday"
                                    placeholder="MM/DD"
                                    value={newBirthday.birthday}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <p>
                            <input className="green-button" type="submit" value="add" />
                        </p>
                    </form>
                </div>
            </div>
            <h2>Birthday book</h2>
            <div className="birthday-card-container">
                {birthdays.map((person) => {
                    const dateConversion = moment.utc(person.birthday).format("dddd, MMM Do")
                    return (
                        <Link key={person._id} to={`/dashboard/birthdaybook/${person._id}`}>
                            <BirthdayCard _id={person._id} firstName={person.firstName} lastName={person.lastName} birthday={dateConversion} />
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}