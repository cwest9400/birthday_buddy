export default function BirthdayCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday
    
    return (
        // bdaycard and date card will have the same styling probably
        <div className="date-card"> 
            <p>{fName} {lName}</p>
            <p>{birthday}</p>
            <button>update</button>
            <button>delete</button>

        </div>
    )
}