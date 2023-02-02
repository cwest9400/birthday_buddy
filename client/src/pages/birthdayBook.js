import { Link, useParams } from "react-router-dom"
import BirthdayCard from "../components/birthdayCard"
import { useState, useEffect } from "react"
import moment from "moment"
import "../style/cssDev.css"

export default function BirthdayBook() {
    const URL = "http://127.0.0.1:4000/birthdays"
    
    const [birthdays, setBirthdays] = useState([])
    const [newBirthday, setNewBirthday] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
    })
    
const getBirthdays = async ()=> {
    try {
        const response = await fetch(URL, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        const allBirthdays = await response.json()
        console.log(allBirthdays)
        setBirthdays(allBirthdays)
        // make a better error message
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
        console.log(newBirthdayEntry)

        setBirthdays([...birthdays, newBirthdayEntry])
console.log(currentState)
        setNewBirthday({
            firstName: "",
            lastName: "",
            birthday: "",
        })
        // make a better error page/display
    } catch (err) {
        console.log(err)
    }
}



//fetching all birthdays from birthday book
useEffect(() => {
    getBirthdays()
    //make this a better error
}, [])
// console.log(birthdays)


return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <h3>Hi User! Welcome to your birthday book</h3>
            <p>Here you can see all of your birthday buddies, add new birthdays, update or delete birthdays.</p>
            <div className="dashboard-nav">
                <Link to={'/dashboard'}>
                <button> back to dashboard</button>
                </Link>
                <h3> add a new birthday</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">
                            First name
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="*First Name"
                                value={newBirthday.firstName}
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            Last Name
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={newBirthday.lastName}
                                onChange={handleChange}
                                />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="birthday">
                            Birthday
                            <input
                                required={true}
                                type="date"
                                id="birthday"
                                name="birthday"
                                placeholder="MM/DD"
                                value={newBirthday.birthday}
                                onChange={handleChange}
                                />
                                *just pick the month and date, the year doesn't matter.
                        </label>
                    </div>
                    <input type="submit" value="add to your birthday book" />
                </form>
                
            </div>
            <h2>Birthday book</h2>
            <div className="date-container">
                {birthdays.map((person)=>{
                    const dateConversion = moment(person.birthday).format("dddd, MMM Do")
                    return (
                        
                        <Link  key={person._id} to={`/dashboard/birthdaybook/${person._id}`}>
                        <BirthdayCard _id={person._id} firstName={person.firstName} lastName={person.lastName} birthday={dateConversion} />
                        </Link>
                        
                    )
                }
                )}
                
                



            </div>

        </div>
    )
}