export default function DateCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday
    
    return (
        <div className="date-card">
            
            <p>{fName} {lName}</p>
            <p>{birthday}</p>
            
            {/* <p>tuesday, april 4</p> format like this*/}

        </div>
    )
}