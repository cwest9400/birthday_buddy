import { Link, Navigate } from "react-router-dom"
import DateCard from "../components/dateCard"
import { useState, useEffect } from "react"
import "../style/cssDev.css"
import moment from "moment"


export default function Dashboard() {
    const URL = "http://127.0.0.1:4000/birthdays"
    const [birthdays, setBirthdays] = useState([])
    
    useEffect(() => {
//if/else

        fetch(URL, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setBirthdays(json)
            })
            .catch(console.error)
        //make this a better error
    }, [])
    // console.log(birthdays)

    
    // const logout = async () => {
    //     localStorage.removeItem("token")
    //     Navigate("/")

    // }


    return (
        <div className="dashboard-container">
            {/* <button onClick={logout()}>sign out</button> */}
            <h1>Dashboard</h1>
            <h3>Hi User! Welcome to your dashboard</h3>
            <p>Here you can see upcoming birthdays and add new birthdays.</p>
            <div className="dashboard-nav">

                <Link to={'/dashboard/birthdaybook'}>
                    <button> birthday book</button>
                </Link>
            </div>
            <h2>up coming birthdays</h2>
            <div className="date-container">
                
                {birthdays.length>0 && birthdays.map((person) => {
                    const dateConversion = moment(person.birthday).format("dddd, MMM Do")
                    //countdown - fix it
                    // const newDate = moment(person.birthday).endOf('day').fromNow();
                    return (
                        <DateCard key={person._id} firstName={person.firstName} lastName={person.lastName} birthday={dateConversion} />
                    )
                }
                )}


            </div>

        </div>
    )
}