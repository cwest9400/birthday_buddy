


export default function BirthdayCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday
    const id = props._id
    
    // local testing use: const URL = `http://127.0.0.1:4000/birthdays/${id}`
    // const URL = `https://birthdaybuddy.herokuapp.com/birthdays/${id}`
    
    
    // const deleteBirthday = async (e) => {
    //     try {
    //         const options = {
    //             method: "DELETE"
    //         }
    //         const response = await fetch(URL, options)
    //         const deletedBirthday = await response.json()
    //         console.log(deletedBirthday)
            

    //     }catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        
        // bdaycard and date card will have the same styling probably
        <div className="birthday-card"> 
            <p className="date-card-date">{fName}</p>
            <p className="date-card-date">{lName}</p>
            <p className="date-card-name">{birthday}</p>
            
            
            {/* <button onClick={deleteBirthday}>delete</button> */}

        </div>
    )
}