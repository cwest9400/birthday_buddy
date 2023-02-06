import { Link } from "react-router-dom"
import DateCard from "../components/dateCard"
import { useState, useEffect } from "react"
import "../style/cssDev.css"
import moment from "moment"
import birthdaybooklogo from '../images/birthdaybooklogo.png'

export default function Dashboard() {
    //local testing use: "http://127.0.0.1:4000/birthdays"
    const URL = "https://birthdaybuddy.herokuapp.com/birthdays"
    const [birthdays, setBirthdays] = useState([])

    useEffect(() => {

        fetch(URL, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then((res) => res.json())
            .then((json) => {
                const cleanedBirthdays = standardizeYear(json);
                setBirthdays(cleanedBirthdays.sort(compare));
            })
            .catch(console.error)
    }, [])
    
    //converts all years into 2023 for sorting
    function standardizeYear(birthdayArray) {
        for (let i = 0; i < birthdayArray.length; i++) {
            let object = birthdayArray[i]
            let changeYear = "2023" + object.birthday.substring(4);
            object.birthday = changeYear
        }
        return birthdayArray
    }
  //sort dates
    function compare(a, b) {
        if (a.birthday < b.birthday) {
            return -1;
        }
        if (a.birthday > b.birthday) {
            return 1;
        }
        return 0;
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <h3 className="dashboard-welcome">Welcome to your dashboard</h3>
            <p className="dashboard-desc">Here, you can see upcoming birthdays.</p>
            <div className="dashboard-nav">
                <Link to={'/dashboard/birthdaybook'}>
                    <img className="birthdaybook-icon" src={birthdaybooklogo} alt="birthday book" />
                </Link>
                <br /><span className="dashboard-desc">Add, edit or remove birthdays</span>
            </div>
            <h2>up coming birthdays</h2>
            <div className="date-container">

                {birthdays.length > 0 && birthdays.map((person) => {
                    const dateConversion = moment.utc(person.birthday).format("dddd, MMM Do")
                    return (
                        <DateCard key={person._id} firstName={person.firstName} lastName={person.lastName} birthday={dateConversion} />
                    )
                }
                )}
            </div>
        </div>
    )
}