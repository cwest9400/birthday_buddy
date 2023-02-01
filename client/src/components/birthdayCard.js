// import { useState, useEffect } from 'react'


export default function BirthdayCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday
    const id = props._id
    const URL = `http://127.0.0.1:4000/birthdays/${id}`
    
    
    const deleteBirthday = async (e) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(URL, options)
            const deletedBirthday = await response.json()
            console.log(deletedBirthday)
            

        }catch (err) {
            console.log(err)
        }
    }

    return (
        
        // bdaycard and date card will have the same styling probably
        <div className="date-card"> 
            <p>{id}</p>
            <p>{fName} {lName}</p>
            <p>{birthday}</p>
            <button>update</button>
            <button onClick={deleteBirthday}>delete</button>

        </div>
    )
}