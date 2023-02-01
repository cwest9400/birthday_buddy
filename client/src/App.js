import Header from "./components/header";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import BirthdayBook from "./pages/birthdayBook";
import UpdateBirthday from "./pages/updateBirthday";
import SignUp from "./pages/signup";
import{ Route, Routes } from 'react-router-dom'

import './style/cssDev.css'
// import './App.css';

function App() {
  return (
    <div>
    <header>
      <Header/>
    </header>
   <main>
    <Routes>
    {/*  "/" will be sign up */}
    <Route path="/" element={<Landing/>} />
    {/* "/dashboard" will be like the user profile page
    it will probably need to change to reflect the logged in user id */}
    <Route path="/dashboard" element={<Dashboard/>}/>
    {/* need to change to reflect the logged in user id */}
    <Route path="/dashboard/birthdaybook" element={<BirthdayBook/>}/>
    {/* need to change to reflect the logged in user id */}
    <Route path="/dashboard/birthdaybook/:id" element={<UpdateBirthday/>}/>
    {/* "/register" will be for registering new users */}
    <Route path="/register" element={<SignUp/>}/>
    </Routes>


    </main>
   </div>
  );
}

export default App;
