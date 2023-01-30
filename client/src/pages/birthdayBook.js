import { Link } from "react-router-dom"
import BirthdayCard from "../components/birthdayCard"
import "../style/cssDev.css"

export default function BirthdayBook() {
    return (
        <div className="dashboard-container">
            <h1>Dashboard/birthdaybook</h1>
            <h3>Hi User! Welcome to your birthday book</h3>
            <p>Here you can see upcoming birthdays and add new birthdays.</p>
            <div className="dashboard-nav">
                <button> add birthday</button>
            </div>
            <h2>up coming birthdays</h2>
            <div className="date-container">
                <BirthdayCard />
                <BirthdayCard />
                <BirthdayCard />
                <BirthdayCard />
                <BirthdayCard />
                <BirthdayCard />



            </div>

        </div>
    )
}