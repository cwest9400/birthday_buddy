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

const getBirthday = async ()=> {
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

           <h2>update birthday</h2>
        </div>
    )
}

