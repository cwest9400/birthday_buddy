import Header from "./components/header";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
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
    </Routes>


    </main>
   </div>
  );
}

export default App;
