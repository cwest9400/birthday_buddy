import Header from "./components/header";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import BirthdayBook from "./pages/birthdayBook";
import UpdateBirthday from "./pages/updateBirthday";
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
    <Route path="/" element={<Landing/>} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/dashboard/birthdaybook" element={<BirthdayBook/>}/>
    <Route path="/dashboard/birthdaybook/:id" element={<UpdateBirthday/>}/>
    </Routes>


    </main>
   </div>
  );
}

export default App;
