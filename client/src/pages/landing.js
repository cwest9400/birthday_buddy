import { Link } from "react-router-dom"
import SignIn from "../components/signin"

export default function Landing() {
    return (
        <div className="landing-container">
            <h1 className="title">birthday buddy</h1>
            <div>
                <SignIn />
            </div>
            <div className="about">
                Introducing Birthday Buddy, the app that helps you keep track of all your loved ones' birthdays and never miss a celebration again.
                <p>
                    Inspired by the thoughtfulness of a beloved aunt who has been sending birthday cards every year, this app is designed to simplify your life and bring a little more joy to those special occasions.
                </p>
                With its user-friendly interface, Birthday Buddy ensures that you'll never forget a birthday, even if your memory fails you.
            </div>
        </div>
    )
}