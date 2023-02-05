
export default function DateCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday

    return (
        <div className="date-card">
            <p className="date-card-date">{birthday}</p>
            <p className="date-card-name">{fName} {lName}</p>
        </div>
    )
}