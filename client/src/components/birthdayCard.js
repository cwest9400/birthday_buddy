
export default function BirthdayCard(props) {
    const fName = props.firstName
    const lName = props.lastName
    const birthday = props.birthday
    const id = props._id

    return (
        <div className="birthday-card">
            <p className="date-card-date">
                {fName} {lName}
            </p>
            <p className="date-card-name">
                {birthday}
            </p>
        </div>
    )
}