import { Link } from "react-router-dom"
import BirthdayCard from "../components/birthdayCard"
import { useState, useEffect } from "react"
import "../style/cssDev.css"

export default function BirthdayBook() {
    const [birthdays, setBirthdays] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:4000/birthdays")
        .then((res) => res.json())
        .then((json) => {
            setBirthdays(json)
        })
        .catch(console.error)
    }, [])
console.log(birthdays)
    return (
        <div className="dashboard-container">
            <h1>Dashboard/birthdaybook</h1>
            <h3>Hi User! Welcome to your birthday book</h3>
            <p>Here you can see upcoming birthdays and add new birthdays.</p>
            <div className="dashboard-nav">
                <button> add birthday</button>
                <Link to={'/dashboard'}>
                <button> back to dashboard</button>
                </Link>
            </div>
            <h2>up coming birthdays</h2>
            <div className="date-container">
                {birthdays.map((person)=>{
                    return (
                        <BirthdayCard key={person._id} firstName={person.firstName} lastName={person.lastName} birthday={person.birthday} />
                    )
                }
                )}
                
                



            </div>

        </div>
    )
}