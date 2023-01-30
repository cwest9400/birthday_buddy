import DateCard from "../components/dateCard"
import "../style/cssDev.css"

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <h3>Hi User! Welcome to your dashboard</h3>
            <p>Here you can see upcoming birthdays and add new birthdays.</p>
        <div className="dashboard-nav">
            <button> add birthday</button>
            <button> birthday book</button>
            </div>
            <h2>up coming birthdays</h2>
        <div className= "date-container">
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />


        </div>
        
        </div>
    )
}